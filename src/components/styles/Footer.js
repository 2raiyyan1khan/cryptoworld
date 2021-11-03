import styled from "styled-components";

export const FooterSection = styled.section`
  background-color: #181818;
`;
export const FooterContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutText = styled.div`
  flex: 1;
  text-align: justify;
`;
export const Copyright = styled.div`
  flex: 1;
  text-align: center;
  align-self: flex-start;
  & a {
    color: #b3b3b3;
    margin-left: 10px;
  }
  @media only screen and (max-width: 768px) {
    align-self: center;
  }
`;
