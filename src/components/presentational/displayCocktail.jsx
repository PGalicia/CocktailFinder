/*
    Description: List all cocktails
*/

import React from "react";
import "../../style/displayCocktail.css";

// Container Component
import CocktailCard from "../presentational/cocktailCard";

const calculateChunks = (arr, col) => {
  const chunk = Math.ceil(arr.length / col);
  // return chunk;
  let result = [];

  for (let i = 0; i < arr.length; i += chunk) {
    let myChunk = arr.slice(i, i + chunk);
    result.push(myChunk);
  }

  return result;
};

const DisplayCocktail = props => {
  return (
    <div className="cocktail-container">
      {props.name !== "n/a" ? <h4>{props.name}</h4> : null}
      {/* <div className="cocktail-list">
        {props.result.map(cocktail => {
          return <CocktailCard key={cocktail.name} cocktail={cocktail} />;
        })}
      </div> */}
      <div className="cocktail-list">
        {calculateChunks(props.result, 2).map(chunk => {
          return (
            <div className="cocktail-column">
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
