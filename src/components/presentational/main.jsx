import React from "react";
import { Switch, Route } from "react-router-dom";
import DisplayCocktail from "./displayCocktail";
import Home from "../container/home";
import NotFound from "../presentational/notFound";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cocktaildb" component={DisplayCocktail} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
