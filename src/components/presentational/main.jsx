import React from "react";
import { Switch, Route } from "react-router-dom";
import DisplayCocktail from "./displayCocktail";
import Home from "../container/home";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cocktaildb" component={DisplayCocktail} />
    </Switch>
  </main>
);

export default Main;
