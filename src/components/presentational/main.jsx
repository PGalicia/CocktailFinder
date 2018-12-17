/*
  Description: The main display
*/

import React from "react";
import "../../style/main.css";
import { Switch, Route } from "react-router-dom";

// Container Component
import Home from "../container/home";

// Presentational Component
import NotFound from "../presentational/notFound";

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
