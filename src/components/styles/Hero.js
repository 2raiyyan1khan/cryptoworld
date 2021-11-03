import styled from "styled-components";

export const HeroSection = styled.div`
  background: linear-gradient(130deg, #6f6bfa 60%, transparent 60%);
  @media only screen and (max-width: 768px) {
    background: linear-gradient(-140deg, #6f6bfa 60%, transparent 60%);
  }
`;
export const StyledHero = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  margin-top: 70px;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
export const WelcomeText = styled.div`
  text-align: center;
  & h1 {
    margin-bottom: 0;
    font-weight: 600;
  }
`;

export const HeroLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & a {
    display: block;
    background-color: #181818;
    padding: 10px 30px;
    border-radius: 5px;
    border: 2px solid #181818;
    font-size: inherit;
    text-transform: uppercase;
    transition: 0.3s;
    &:hover {
      color: #181818;
      background: transparent;
    }
  }
`;

export const HeroImg = styled.div`
  flex: 2;
  & img {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
