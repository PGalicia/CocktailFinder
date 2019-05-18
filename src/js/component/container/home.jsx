import React, { Component } from "react";
import "./../../../scss/home.scss";
import { COCKTAIL_INFORMATION } from "./../../constant/cocktailsInformation.js";
import CocktailCard from "./../presentational/cocktailCard.jsx";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="cocktail-finder-logo" />
        <section className="cocktail-cards-container">
          {COCKTAIL_INFORMATION.map(cocktail => {
            return (
              <CocktailCard
                cocktail={cocktail}
                key={COCKTAIL_INFORMATION.indexOf(cocktail)}
              />
            );
          })}
        </section>
      </>
    );
  }
}

export default Home;
