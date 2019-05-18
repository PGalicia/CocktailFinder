import React, { Component } from "react";
import "./../../../scss/home.scss";
import { connect } from "react-redux";
import { changeGreeting } from "../../action/index.js";
import parse from "html-react-parser"; // Parser
import { COCKTAIL_INFORMATION } from "./../../constant/cocktailsInformation.js";

const mapStateToProps = state => {
  return {
    greetingMessage: state.greetingMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeGreeting: greeting => dispatch(changeGreeting(greeting))
  };
};

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>{this.props.greetingMessage}</h1>
        <button onClick={() => this.props.changeGreeting("Hi World!")}>
          Change greeting
        </button>

        {COCKTAIL_INFORMATION.map(cocktail => {
          const { name, description, ingredients, instructions } = cocktail;
          return (
            <div key={name} className="cocktail-card-container">
              <h3>{name}</h3>
              <p>{description}</p>
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
            </div>
          );
        })}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
