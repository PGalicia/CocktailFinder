import React from "react";
import "../../style/App.css";

// Components - Presentational
import Header from "./header";
import Main from "./main";

import Checklist from "../container/checklist";

const App = () => (
  <React.Fragment>
    {/* <Header /> */}
    <Checklist />
    <Main />
  </React.Fragment>
);

export default App;
