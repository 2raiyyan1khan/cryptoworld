import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Container } from "./styles/Container";
import {
  FooterSection,
  FooterContainer,
  AboutText,
  Copyright,
} from "./styles/Footer";
const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <AboutText>
            <p>
              Cryptoworld provides you one place where you can find the latest
              price of cryptocurrency and all the information and latest news
              related to it.
            </p>
          </AboutText>
          <Copyright>
            <p>
              <small>&copy; {new Date().getFullYear()}</small>
              <small style={{ marginLeft: "10px" }}>
                Build by Mohammad Raiyyan
              </small>
            </p>
            <span>
              <a
                href="https://www.linkedin.com/mwlite/in/mohammad-raiyyan-735a71152"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={40} />
              </a>
              <a
                href="https://github.com/2raiyyan1khan"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub size={40} />
              </a>
            </span>
          </Copyright>
        </FooterContainer>
      </Container>
    </FooterSection>
  );
};

export default Footer;
