import moment from "moment";
import React from "react";
import { useGetCryptoNewsQuery } from "../services/newsApi";
import Loading from "./Loading";
import { Container } from "./styles/Container";
import {
  NewsMainContainer,
  NewsCard,
  NewsImg,
  NewsTitle,
  NewsHeader,
  NewsDescription,
  NewsFooter,
} from "./styles/News";

const News = ({ home }) => {
  const { data, isFetching, isError, error } = useGetCryptoNewsQuery({
    newsCategory: "cryptocurrency",
    dataLimit: home ? 9 : 24,
  });

  return (
    <Container>
      {isError ? (
        <h2>{error?.message}</h2>
      ) : isFetching ? (
        <Loading home={home} />
      ) : (
        <NewsMainContainer style={{ marginTop: !home ? "70px" : "" }}>
          {data?.value?.map((news, index) => {
            return (
              <NewsCard key={index}>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <NewsHeader>
                    <NewsImg
                      src={news.image?.thumbnail.contentUrl}
                      alt={index}
                    />

                    <NewsTitle>
                      {news.name.length > 50
                        ? `${news.name.substring(0, 50)}...`
                        : news.name}
                    </NewsTitle>
                  </NewsHeader>

                  <NewsDescription>
                    <p>
                      {news.description.length > 100
                        ? `${news.description.substring(0, 50)}...`
                        : news.description}
                    </p>
                  </NewsDescription>
                </a>
                <NewsFooter>
                  <small>
                    <img
                      src={news.provider[0].image?.thumbnail.contentUrl}
                      alt={news.provider[0].name}
                    />
                    <span>
                      <small>{news.provider[0].name}</small>
                      <small>
                        {moment(news.datePublished).startOf("ss").fromNow()}
                      </small>
                    </span>
                  </small>
                </NewsFooter>
              </NewsCard>
            );
          })}
        </NewsMainContainer>
      )}
    </Container>
  );
};

export default News;
