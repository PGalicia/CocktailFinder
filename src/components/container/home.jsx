import React, { Component } from "react";

// Components - Container
import Checklist from "./checklist";

// Components - Presentational
import Selected from "../presentational/selected";
import Result from "../presentational/result";

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
  constructor() {
    super();

    // Checkbox Setup
    this.setupCheckbox = this.setupCheckbox.bind(this);
  }

  componentDidMount() {
    this.setupCheckbox();
  }

  setupCheckbox() {
    let checkboxes = [];
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
    let notEmpty = !this.props.selected.every(
      category => category.chosen.length === 0
    );
    console.log("notEmpty", notEmpty);
    return (
      <React.Fragment>
        <Checklist />
        {notEmpty && <Selected selected={this.props.selected} />}

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
)(Home);
