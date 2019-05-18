import React, { Component } from "react";
import "./../../../scss/home.scss";
import { connect } from "react-redux";
import { changeGreeting } from "../../action/index.js";
import { COCKTAIL_INFORMATION } from "./../../constant/cocktailsInformation.js";
import CocktailCard from "./../presentational/cocktailCard.jsx";

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
          return (
            <CocktailCard
              cocktail={cocktail}
              key={COCKTAIL_INFORMATION.indexOf(cocktail)}
            />
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
