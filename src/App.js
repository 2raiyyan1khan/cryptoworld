import React from "react";
import News from "./components/News";
import CryptocurrencyDetails from "./components/CryptocurrencyDetails";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Home from "./components/Home";
import "./app.css";

import { Switch, Route } from "react-router";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />

      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cryptocurrencies" exact>
          <Cryptocurrencies />
        </Route>
        <Route path="/news" exact>
          <News />
        </Route>
        <Route path="/details/:name/:cId" exact>
          <CryptocurrencyDetails />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
