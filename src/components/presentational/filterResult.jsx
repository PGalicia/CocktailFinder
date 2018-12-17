/*
  Description: Lists the cocktails.
*/

import React from "react";
import "../../style/filterResult.css";

// Presentational Component
import CocktailCard from "../presentational/cocktailCard";

const FilterResult = props => {
  return (
    <div className="filter-result-container">
      <h2 className="filter-result-title">{props.name}</h2>
      <div className="filter-result-list">
        {props.result.map(cocktail => {
          return <CocktailCard key={cocktail.name} cocktail={cocktail} />;
        })}
      </div>
    </div>
  );
};

export default FilterResult;
