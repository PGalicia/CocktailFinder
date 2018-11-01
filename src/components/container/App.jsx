import React, { Component } from "react";
import "../../style/App.css";

// Redux
import { connect } from "react-redux";
import { handleCheckboxes } from "../../actions";

// Components - Container
import Checklist from "./checklist";

// Components - Presentational
import Selected from "../presentational/selected";
import Result from "../presentational/result";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckboxes: checkboxes => dispatch(handleCheckboxes(checkboxes))
  };
};

class App extends Component {
  constructor() {
    super();

    // Checkbox Setup
    this.setupCheckbox = this.setupCheckbox.bind(this);
  }

  componentDidMount() {
    this.setupCheckbox();
  }

  setupCheckbox() {
    let checkboxes = [...this.props.checkboxes];
    let count = 0;

    for (let id = count; id < this.props.alcohol.length; id++) {
      let key = this.props.alcohol[id];
      let template = {
        id: id,
        category: "liquor",
        name: key,
        isChecked: false
      };
      checkboxes.push(template);
      count++;
    }

    for (let id = 0; id < this.props.ingredients.length; id++) {
      let key = this.props.ingredients[id];
      let template = {
        id: count,
        category: "ingredient",
        name: key,
        isChecked: false
      };
      checkboxes.push(template);
      count++;
    }

    this.props.handleCheckboxes(checkboxes);
  }

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1 className="title">Cocktail Finder</h1>
        </div>
        <Checklist />
        <h2>Selected:</h2>
        <Selected
          name="Liquor"
          category="liquor"
          selected={this.props.selected}
        />
        <Selected
          name="Ingredients"
          category="ingredients"
          selected={this.props.selected}
        />
        <h2>Result:</h2>
        <Result
          name="Possible Cocktail"
          result={this.props.possibleCocktails}
        />
        <Result name="Close Cocktail" result={this.props.closeCocktails} />
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
