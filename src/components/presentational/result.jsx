import React from "react";
import "../../style/result.css";

const ResultContainer = props => {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <div className="cocktail-list">
        {props.result.map(cocktail => {
          // console.log(cocktail.ingredients);

          return (
            <div key={cocktail.name} className="cocktail-card">
              <h2>{cocktail.name}</h2>
              <div className="cocktail-name">
                {/* <div className="label">Alcohol</div> */}
                <p className="label">Alcohol</p>
                <div className="item-list">
                  {cocktail.alcohol.map(alc => {
                    return (
                      <div className="text">
                        <p>{alc.toLowerCase()}</p>
                        <span className="dotted" />
                      </div>
                      // <p
                      //   key={alc}
                      //   className="text"
                      //   // style={{ backgroundColor: "skyblue" }}
                      // >
                      //   <span>{alc.toLowerCase()}</span>
                      // </p>
                    );
                  })}
                </div>
                {/* <p className="text">
                  {cocktail.alcohol.join(", ").toLowerCase()}
                </p> */}
              </div>
              {/* <div className="cocktail-garnish">
                <div className="label" id="dotted">
                  Garnish
                </div>
                {cocktail.garnish.length === 0 ? (
                  <p className="text">
                    <i>n/a</i>
                  </p>
                ) : (
                  <p className="text">
                    {cocktail.garnish.join(", ").toLowerCase()}
                  </p>
                )}
              </div>
              <div className="cocktail-ingredients">
                <div className="label" id="dotted">
                  Ingredients
                </div>
                <p className="text">
                  {cocktail.ingredients.join(", ").toLowerCase()}
                </p>
              </div>
              <hr /> */}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default ResultContainer;
