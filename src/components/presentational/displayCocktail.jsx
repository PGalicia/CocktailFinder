/*
    Description: List all cocktails
*/

import React from "react";
import "../../style/displayCocktail.css";

// Container Component
import CocktailCard from "../presentational/cocktailCard";

const calculateChunks = (arr, col) => {
  let result = [];
  let index = 0;
  let x = 0;
  let y = null;

  for (let i = 1; i <= col; i++) {
    result.push([]);
  }

  while (x < arr.length) {
    y = x + 1;
    result[index].push(arr.slice(x, y)[0]);
    index = (index + 1) % result.length;
    x += 1;
  }

  return result;
};

const DisplayCocktail = props => {
  return (
    <div className="cocktail-container">
      {props.name !== "n/a" ? <h4>{props.name}</h4> : null}
      <div className="cocktail-list">
        {calculateChunks(props.result, 2).map(chunk => {
          return (
            <div className="cocktail-column" key={chunk[0].name}>
              {chunk.map(cocktail => {
                return <CocktailCard key={cocktail.name} cocktail={cocktail} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayCocktail;
