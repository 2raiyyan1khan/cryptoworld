import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";
const headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "fc2b63e9d1msh4f9a7b8cc40a722p18d288jsn4a247700ca86",
};
const createRequest = (url) => ({ url, headers: headers });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}`),
    }),
    getCryptoDetails: builder.mutation({
      query: (cId) => createRequest(`/coin/${cId}`),
    }),
  }),
});
export const { useGetCryptoQuery, useGetCryptoDetailsMutation } = cryptoApi;
