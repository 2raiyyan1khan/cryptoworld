import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles/Container";
import {
  Card,
  CardBody,
  Item,
  CryptocurrenciesMainContainer,
} from "./styles/Cryptocurrencies";
import { useGetCryptoQuery } from "../services/cryptoApi";
import Loading from "./Loading";

const Currencies = ({ home }) => {
  const limit = home ? 10 : 100;
  const { data, isFetching, error, isError } = useGetCryptoQuery(limit);
  let coins = data?.data?.coins;

  return (
    <Container>
      {isError ? (
        <h2>{error?.message}</h2>
      ) : isFetching ? (
        <Loading home={home} />
      ) : (
        <CryptocurrenciesMainContainer
          style={{ marginTop: !home ? "70px" : "" }}
        >
          {coins?.map((coin) => (
            <Card key={coin.id}>
              <Link to={`/details/${coin.slug}/${coin.id}`}>
                <CardBody key={coin.id}>
                  <Item>
                    <div>
                      <h5>{coin.rank}.</h5>
                      <div>
                        <img src={coin.iconUrl} alt={coin.name} />

                        <h5>{coin.name}</h5>
                      </div>
                    </div>
                  </Item>

                  <Item>
                    <strong>Price: </strong>
                    <span>{millify(coin.price)}$</span>
                  </Item>
                  <Item>
                    <strong>Total Volume: </strong>
                    <span>{millify(coin.volume)}$</span>
                  </Item>
                  <Item>
                    <strong>Change: </strong>
                    <span style={{ color: coin.change < 0 ? "red" : "green" }}>
                      {coin.change}%
                    </span>
                  </Item>
                </CardBody>
              </Link>
            </Card>
          ))}
        </CryptocurrenciesMainContainer>
      )}
    </Container>
  );
};

export default Currencies;
