import React from "react";
import CocktailCard from "./cocktailCard";
import "../../style/result.css";

const ResultContainer = props => {
  return (
    <div className="cocktail-container">
      {props.name !== "n/a" ? <h4>{props.name}</h4> : null}
      <div className="cocktail-list">
        {props.result.map(cocktail => {
          return <CocktailCard cocktail={cocktail} />;
        })}
      </div>
    </div>
  );
};

export default ResultContainer;
