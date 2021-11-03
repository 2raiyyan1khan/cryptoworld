import React from "react";
import { useParams } from "react-router";
import HTMLReactParser from "html-react-parser";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { FiDollarSign } from "react-icons/fi";
import {
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
} from "react-icons/ai";
import millify from "millify";
import { Container } from "./styles/Container";
import {
  DetailsSection,
  DetailsArticle,
  List,
  Item,
  Hr,
} from "./styles/Details";
import Loading from "./Loading";

const CurrenciesDetails = () => {
  const { cId } = useParams();
  const { data, isFetching, isError, error } = useGetCryptoDetailsQuery(cId);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${data?.data?.coin.price && millify(data?.data?.coin.price)}`,
      icon: <FiDollarSign />,
    },
    {
      title: "Rank",
      value: data?.data?.coin.rank,
      icon: <AiOutlineNumber />,
    },
    {
      title: "24h Volume",
      value: `$ ${data?.data?.coin.volume && millify(data?.data?.coin.volume)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        data?.data?.coin.marketCap && millify(data?.data?.coin.marketCap)
      }`,
      icon: <FiDollarSign />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        data?.data?.coin.marketCap &&
        millify(data?.data?.coin.allTimeHigh.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];
  return (
    <Container>
      {isError ? (
        <div style={{ margin: "100px 0", textAlign: "center" }}>
          <h2>{error?.message}</h2>
        </div>
      ) : isFetching ? (
        <Loading />
      ) : (
        <DetailsSection>
          <DetailsArticle>
            <img src={data?.data?.coin?.iconUrl} alt={data?.data?.coin?.name} />
            <h1>{data?.data?.coin?.name}</h1>
            <p>
              Live price in US Dollar of {data?.data?.coin?.name}. View value
              statistics, market cap and supply.
            </p>
          </DetailsArticle>
          <Hr />

          <DetailsArticle>
            <h2>{`${data?.data?.coin?.name} value statistics Overview.`}</h2>
            <List>
              {stats?.map((item, index) => (
                <Item key={index}>
                  <div>
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#ffffff",
                      }}
                    >
                      {item.icon}

                      <strong style={{ marginLeft: "10px" }}>
                        {item.title}
                      </strong>
                    </p>
                    <span>{item.value}</span>
                  </div>
                </Item>
              ))}
            </List>
          </DetailsArticle>
          <Hr />
          <DetailsArticle>
            <h2>{`Know About ${data?.data?.coin?.name}`} </h2>
            {HTMLReactParser(data?.data?.coin.description)}
          </DetailsArticle>
          <Hr />
          <DetailsArticle>
            <h2>{`Resources to know about ${data?.data?.coin?.name}`}</h2>
            <List>
              {data?.data?.coin?.links?.map((link, index) => (
                <Item key={index}>
                  <div>
                    <p style={{ margin: 0 }}>{link.type.toUpperCase()}</p>
                    <small>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.name}
                      </a>
                    </small>
                  </div>
                </Item>
              ))}
            </List>
          </DetailsArticle>
        </DetailsSection>
      )}
    </Container>
  );
};

export default CurrenciesDetails;
