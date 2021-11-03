import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles/Container";
import {
  StyledHero,
  HeroLink,
  WelcomeText,
  HeroImg,
  HeroSection,
} from "./styles/Hero";
const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <StyledHero>
          <WelcomeText>
            <h1>Hey, Welcome!</h1>
            <p>Get latest information about cryptocurrencies.</p>
            <HeroLink>
              <Link to="/currencies">Explore</Link>
            </HeroLink>
          </WelcomeText>
          <HeroImg>
            <img src="/img/hero.svg" alt="" />
          </HeroImg>
        </StyledHero>
      </Container>
    </HeroSection>
  );
};

export default Hero;
