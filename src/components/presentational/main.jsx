import React from "react";
import { Switch, Route } from "react-router-dom";
import DisplayCocktail from "./displayCocktail";
import Home from "../container/home";
import NotFound from "../presentational/notFound";
import "../../style/main.css";
import HOMEPATH from "../../constants/home-path";

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path={HOMEPATH} component={Home} />
      <Route path={`${HOMEPATH}cocktaildb`} component={DisplayCocktail} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
