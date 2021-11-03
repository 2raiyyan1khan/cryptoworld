import styled from "styled-components";

export const StyledHome = styled.div`
  text-align: center;
  & h2 {
    margin-top: 3rem;
  }
`;

export const GlobalStatsMainSection = styled.section`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem 1.5rem;
`;
export const Stats = styled.main`
  grid-column: span 13;
  background-color: #181818;
  border-radius: 10px;
  padding: 20px;
  & h5 {
    text-transform: uppercase;
    margin-bottom: 0;
  }
  & span {
    color: #b3b3b3;
    font-size: 56px;
  }
  @media only screen and (min-width: 760px) {
    grid-column: span 6;
  }
`;

export const SeeMoreButton = styled.div`
  margin: 30px 0;
  box-sizing: border-box;
  & a {
    border: 2px solid #6f6bfa;
    padding: 10px 15px;
    border-radius: 10px;
    text-transform: uppercase;
    transition: 0.3s;

    &:hover {
      background-color: #6f6bfa;
      color: #181818;
    }
  }
`;
