import React, { Component } from "react";
import "./../../../scss/cocktailCard.scss";
import parse from "html-react-parser"; // Parser

class CocktailCard extends Component {
  constructor() {
    super();

    this.state = {
      isCocktailInstructionCollapsibleOpen: false
    };

    this.toggleCocktailCardInstructionCollapsible = this.toggleCocktailCardInstructionCollapsible.bind(
      this
    );
  }

  toggleCocktailCardInstructionCollapsible() {
    this.setState({
      isCocktailInstructionCollapsibleOpen: !this.state
        .isCocktailInstructionCollapsibleOpen
    });
  }

  render() {
    const {
      name,
      description,
      ingredients,
      instructions
    } = this.props.cocktail;
    return (
      <div key={name} className="cocktail-card-container">
        <div
          className="main-information"
          onClick={this.toggleCocktailCardInstructionCollapsible}
        >
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        {this.state.isCocktailInstructionCollapsibleOpen && (
          <div className="cocktail-instructions-container">
            <h3>How to prepare this drink:</h3>
            <ul className="ingredients">
              {ingredients.map(ingredient => {
                return (
                  <li className="ingredient" key={ingredient.ingredient}>
                    <span>{ingredient.ingredient}</span>
                    <span className="dot" />
                    <span>{ingredient.measurement}</span>
                  </li>
                );
              })}
            </ul>
            {parse(instructions)}
          </div>
        )}
      </div>
    );
  }
}

export default CocktailCard;
