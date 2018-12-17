/*
  Description: Contains the entire Web App 
*/

import React from "react";
import "../../style/App.css";

// Components - Presentational
import Main from "./main";

import Checklist from "../container/checklist";

const App = () => (
  <React.Fragment>
    <Checklist />
    <Main />
  </React.Fragment>
);

export default App;
