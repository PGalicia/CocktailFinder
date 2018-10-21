import React from "react";

const ResultContainer = props => (
  <React.Fragment>
    <h4>{props.name}</h4>
    <ul>
      {props.result.map(cocktail => {
        return <li key={cocktail.name}>{cocktail.name}</li>;
      })}
    </ul>
  </React.Fragment>
);

export default ResultContainer;
