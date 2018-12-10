import React from "react";
import "../../style/result.css";
import { calculateWidth } from "../../utils";

const ResultContainer = props => {
  // const alcoholLength = calculateWidth(cocktail.alcohol.join(", "));
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <div className="cocktail-list">
        {props.result.map(cocktail => {
          return (
            <div key={cocktail.name} className="cocktail-card">
              {/* <div className="cocktail-img" />
                <div className="cocktail-name">{cocktail.name}</div>
                <h5 className="cocktail-card-category">Alcohol:</h5>
                <ul className="cocktail-alcohol">
                  {cocktail.alcohol.map(alcohol => {
                    return <li key={alcohol}>{alcohol}</li>;
                  })}
                </ul>
                <h5 className="cocktail-card-category">Garnish:</h5>
                <ul className="cocktail-garnish">
                  {cocktail.garnish.map(garnish => {
                    return <li key={garnish}>{garnish}</li>;
                  })}
                </ul>
                <h5 className="cocktail-card-category">Ingredients:</h5>
                <ul className="cocktail-ingredients">
                  {cocktail.ingredients.map(ingredient => {
                    return <li key={ingredient}>{ingredient}</li>;
                  })}
                </ul> */}
              <h2>{cocktail.name}</h2>
              <div className="cocktail-name">
                <div className="label" id="dotted">
                  Alcohol
                </div>
                <div className="text">
                  <p>{cocktail.alcohol.join(", ")}</p>
                </div>
              </div>
              <div className="cocktail-garnish">
                <div className="label" id="dotted">
                  Garnish
                </div>
                <div className="text">
                  <p>{cocktail.garnish.join(", ")}</p>
                </div>
              </div>
              <div className="cocktail-ingredients">
                <div className="label" id="dotted">
                  Ingredients
                </div>
                <div className="text">
                  <p>{cocktail.ingredients.join(", ")}</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ResultContainer;
