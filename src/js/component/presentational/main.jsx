import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../container/home.jsx";
import About from "./about.jsx";

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
};

export default Main;
