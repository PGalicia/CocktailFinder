/*
  Description: The component handles the checklist form.
    This contains checkboxes of all the listed alchol and
    ingredients.
*/

import React, { Component } from "react";
import "../../style/checklist.css";

// Redux
import { connect } from "react-redux";
import {
  handleCheckboxes,
  selectedCheckboxes,
  updateCloseCocktails,
  updatePossibleCocktails,
  reset
} from "../../actions/index";

// Components - Presentational
import FilterChecklist from "../presentational/filterChecklist";

const mapStateToProps = state => {
  return {
    checkboxes: state.checkboxes,
    selected: state.selected,
    cocktails: state.cocktails,
    alcohol: state.alcohol,
    ingredients: state.ingredients,
    closeCocktails: state.closeCocktails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckboxes: checkboxes => dispatch(handleCheckboxes(checkboxes)),
    selectedCheckboxes: selected => dispatch(selectedCheckboxes(selected)),
    updateCloseCocktails: chosen => dispatch(updateCloseCocktails(chosen)),
    updatePossibleCocktails: chosen =>
      dispatch(updatePossibleCocktails(chosen)),
    reset: () => dispatch(reset())
  };
};

class Checklist extends Component {
  constructor() {
    super();

    // Event Handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);

    // Checkbox Setup
    this.setupCheckbox = this.setupCheckbox.bind(this);

    // Other
    this.findCocktails = this.findCocktails.bind(this);
    this.testShowState = this.testShowState.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();

    // Add the selected state to the 'selectedLiquor' array
    let selected = [...this.props.selected];

    // reset chosen items
    for (let category of selected) {
      category.chosen = [];
    }

    // Handle liquor
    this.props.checkboxes.forEach(liquor => {
      if (
        liquor.category === "liquor" &&
        liquor.isChecked === true &&
        selected[0].chosen.includes(liquor.name) === false
      ) {
        selected[0].chosen.push(liquor.name);
      }
    });

    // Handle Ingredients
    this.props.checkboxes.forEach(ingredient => {
      if (
        ingredient.category === "ingredient" &&
        ingredient.isChecked === true &&
        selected[1].chosen.includes(ingredient.name) === false
      ) {
        selected[1].chosen.push(ingredient.name);
      }
    });

    this.props.selectedCheckboxes(selected);
    this.findCocktails();
  }

  findCocktails() {
    let closeCocktails = [];
    let possibleCocktails = [];

    // Finds the close cocktail matches -- has at least one matching ingredient/alcohol
    for (let cocktail of this.props.cocktails) {
      for (let alcohol of cocktail.alcohol) {
        if (this.props.selected[0].chosen.includes(alcohol)) {
          closeCocktails.push(cocktail);
          break;
        }
      }

      for (let ingredient of cocktail.ingredients) {
        if (
          this.props.selected[1].chosen.includes(ingredient) &&
          !closeCocktails.includes(cocktail)
        ) {
          closeCocktails.push(cocktail);
          break;
        }
      }

      // Finds the exact cocktail match
      if (
        cocktail.alcohol.every(
          elem => this.props.selected[0].chosen.indexOf(elem) > -1
        ) &&
        cocktail.ingredients.every(
          elem => this.props.selected[1].chosen.indexOf(elem) > -1
        )
      )
        possibleCocktails.push(cocktail);
    }

    this.props.updateCloseCocktails(closeCocktails);
    this.props.updatePossibleCocktails(possibleCocktails);
  }

  handleChange(e) {
    let checkboxes = [...this.props.checkboxes];
    let bool = e.target.value === "false" ? true : false;
    checkboxes[+e.target.id].isChecked = bool;
    this.props.handleCheckboxes(checkboxes);
  }

  handleClear(e) {
    e.preventDefault();

    let checkboxes = [...this.props.checkboxes];
    checkboxes.forEach(index => {
      index.isChecked = false;
    });
    this.props.handleCheckboxes(checkboxes);
  }

  testShowState() {
    // this.props.reset(["a"]);
    // console.log("hello", this.props.closeCocktails);

    // let checkboxes = [...this.props.checkboxes];
    // checkboxes.forEach(index => {
    //   index.isChecked = false;
    // });
    // this.props.handleCheckboxes(checkboxes);

    this.setupCheckbox();
    this.props.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="filter-form">
        <header className="title">
          <h1 style={{ display: "none" }}>Calvin's Logo</h1>
          <button onClick={this.testShowState}>database</button>
          {/* <button onClick={() => this.props.reset()}>database</button> */}
        </header>
        <FilterChecklist
          name="ALCOHOL"
          category="liquor"
          checkboxes={this.props.checkboxes}
          handleChange={this.handleChange}
          isExpanded={false}
        />
        <FilterChecklist
          name="INGREDIENTS"
          category="ingredient"
          checkboxes={this.props.checkboxes}
          handleChange={this.handleChange}
          isExpanded={true}
        />

        <button className="filter-button">Submit</button>
        <button className="filter-button" onClick={this.handleClear}>
          Clear
        </button>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checklist);
