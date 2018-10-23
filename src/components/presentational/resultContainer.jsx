import React from "react";
import "../../style/result.css";

const ResultContainer = props => (
  <React.Fragment>
    <h4>{props.name}</h4>
    <ul className="cocktail-list">
      {props.result.map(cocktail => {
        return (
          <li key={cocktail.name}>
            <div className="cocktail-card">
              <div className="cocktail-img" />
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
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  </React.Fragment>
);

export default ResultContainer;
