import React from "react";
import { useGetCryptoQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import millify from "millify";
import Hero from "./Hero";
import { Container } from "./styles/Container";
import {
  GlobalStatsMainSection,
  Stats,
  SeeMoreButton,
  StyledHome,
} from "./styles/Home";
import Loading from "./Loading";

const Home = () => {
  const { data, isFetching } = useGetCryptoQuery(10);
  let stats = data?.data?.stats;

  return (
    <StyledHome>
      <Hero />
      <Container>
        <h2>Global Crypto Statistics</h2>
        {isFetching ? (
          <Loading home />
        ) : (
          <GlobalStatsMainSection>
            <Stats>
              <h5>Total</h5>
              <span>{stats?.total}</span>
            </Stats>
            <Stats>
              <h5>Total Markets</h5>
              <span>{stats?.totalMarkets && millify(stats?.totalMarkets)}</span>
            </Stats>
            <Stats>
              <h5>Total Markets Cap</h5>
              <span>
                {stats?.totalMarketCap && millify(stats?.totalMarketCap)}
              </span>
            </Stats>
            <Stats>
              <h5>Total Exchanges</h5>
              <span>
                {stats?.totalExchanges && millify(stats?.totalExchanges)}
              </span>
            </Stats>
            <Stats>
              <h5>Total 24H Volume</h5>
              <span>
                {stats?.total24hVolume && millify(stats?.total24hVolume)}
              </span>
            </Stats>
          </GlobalStatsMainSection>
        )}
      </Container>
      {/* top 10 currencies  */}

      <h2>Top 10 Cryptocurrencies</h2>

      <Cryptocurrencies home />

      <SeeMoreButton>
        <Link to="/currencies">See More</Link>
      </SeeMoreButton>

      {/* top 10 News  */}

      <h2>Trending News </h2>
      <News home />

      <SeeMoreButton>
        <Link to="/news">See More</Link>
      </SeeMoreButton>
    </StyledHome>
  );
};

export default Home;
