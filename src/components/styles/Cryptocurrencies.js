import styled from "styled-components";

export const CryptocurrenciesMainContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem 1.5rem;
  padding: 30px 0;
`;
export const Card = styled.main`
  grid-column: span 13;
  background-color: #181818;
  border-radius: 10px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Item = styled.article`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  & div {
    display: flex;
    align-items: center;
    flex: 1;
    & div {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;
      @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
      }
    }

    & h5 {
      margin-bottom: 0;
    }
  }
  & h5 {
    margin-bottom: 0;

    margin-right: 10px;
  }
  & img {
    width: 30px;
    width: 30px;
    display: block;
    margin: 0 10px;
  }
  & strong {
    color: #ffffff;
  }
  & span {
    color: #b3b3b3;
  }
`;
