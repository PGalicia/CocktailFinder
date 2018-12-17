/*
  Description: The default page
*/

import React, { Component } from "react";
import "../../style/home.css";

// Components - Presentational
import Result from "../presentational/result";
import Greeting from "../presentational/greeting";
import DisplayCocktail from "../presentational/displayCocktail";

// Redux
import { connect } from "react-redux";
import { handleCheckboxes } from "../../actions";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckboxes: checkboxes => dispatch(handleCheckboxes(checkboxes))
  };
};

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isGreetOpen === false ? (
          this.props.selected.every(current => current.chosen.length === 0) ? (
            <DisplayCocktail name="n/a" result={this.props.cocktails} />
          ) : (
            <Result
              possible={this.props.possibleCocktails}
              close={this.props.closeCocktails}
            />
          )
        ) : (
          <Greeting />
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
