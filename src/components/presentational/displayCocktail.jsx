/*
    Description: List all cocktails
*/

import React from "react";
import "../../style/displayCocktail.css";

// Container Component
import CocktailCard from "../presentational/cocktailCard";

// utils
import { calculateChunks } from "../../utils";

import { Scrollbars } from "react-custom-scrollbars";

const DisplayCocktail = props => {
  return (
    <div className="cocktail-container">
      <Scrollbars style={{ height: "100vh" }}>
        {props.name !== "n/a" ? <h4>{props.name}</h4> : null}
        <div className="cocktail-list">
          {calculateChunks(props.result, 2).map(chunk => {
            return (
              <div className="cocktail-column" key={chunk[0].name}>
                {chunk.map(cocktail => {
                  return (
                    <CocktailCard key={cocktail.name} cocktail={cocktail} />
                  );
                })}
              </div>
            );
          })}
        </div>
      </Scrollbars>
    </div>
  );
};

export default DisplayCocktail;
