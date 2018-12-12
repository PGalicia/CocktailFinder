import React from "react";
import "../../style/result.css";

const ResultContainer = props => {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <div className="cocktail-list">
        {props.result.map(cocktail => {
          return (
            <div key={cocktail.name} className="cocktail-card">
              <h2>{cocktail.name}</h2>
              <div className="cocktail-name">
                <p className="label">Alcohol</p>
                <div className="item-list">
                  {cocktail.alcohol.map(alc => {
                    return (
                      <div className="text">
                        <p>{alc.toLowerCase()}</p>
                        <span className="dotted" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="cocktail-garnish">
                <p className="label">Garnish</p>
                <div className="item-list">
                  {cocktail.garnish.map(gar => {
                    return (
                      <div className="text">
                        <p>{gar.toLowerCase()}</p>
                        <span className="dotted" />
                      </div>
                    );
                  })}
                  {cocktail.garnish.length === 0 ? (
                    <div className="text">
                      <p>
                        <i>n/a</i>
                      </p>
                      <span className="dotted" />
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="cocktail-ingredients">
                <p className="label">Ingredients</p>
                <div className="item-list">
                  {cocktail.ingredients.map(ingre => {
                    return (
                      <div className="text">
                        <p>{ingre.toLowerCase()}</p>
                        <span className="dotted" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ResultContainer;
