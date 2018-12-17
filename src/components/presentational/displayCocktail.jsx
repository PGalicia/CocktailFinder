/*
    Description: List all cocktails
*/

import React from "react";
import "../../style/displayCocktail.css";

// Container Component
import CocktailCard from "../presentational/cocktailCard";

const DisplayCocktail = props => {
  return (
    <div className="cocktail-container">
      {props.name !== "n/a" ? <h4>{props.name}</h4> : null}
      <div className="cocktail-list">
        {props.result.map(cocktail => {
          return <CocktailCard key={cocktail.name} cocktail={cocktail} />;
        })}
      </div>
    </div>
  );
};

export default DisplayCocktail;
