import React from "react";
import CocktailCard from "../presentational/cocktailCard";
import "../../style/filterResult.css";

const FilterResult = props => {
  return (
    <div className="filter-result-container">
      <h2 className="filter-result-title">{props.name}</h2>
      <div className="filter-result-list">
        {props.result.map(cocktail => {
          return <CocktailCard cocktail={cocktail} />;
        })}
      </div>
    </div>
  );
};

export default FilterResult;
