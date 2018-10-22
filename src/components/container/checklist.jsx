import React, { Component } from "react";
import "../../style/checklist.css";

// Redux
import { connect } from "react-redux";
import {
  handleCheckboxes,
  selectedCheckboxes,
  updateCloseCocktails,
  updatePossibleCocktails
} from "../../actions/index";

// Components - Presentational
import FilterChecklistContainer from "../presentational/filterChecklistContainer";

const mapStateToProps = state => {
  return {
    checkboxes: state.checkboxes,
    selected: state.selected,
    cocktails: state.cocktails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckboxes: checkboxes => dispatch(handleCheckboxes(checkboxes)),
    selectedCheckboxes: selected => dispatch(selectedCheckboxes(selected)),
    updateCloseCocktails: chosen => dispatch(updateCloseCocktails(chosen)),
    updatePossibleCocktails: chosen => dispatch(updatePossibleCocktails(chosen))
  };
};

class Checklist extends Component {
  constructor() {
    super();

    // Event Handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);

    // Other
    this.findCocktails = this.findCocktails.bind(this);
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
    let checkboxes = [...this.props.checkboxes];
    checkboxes.forEach(index => {
      index.isChecked = false;
    });
    this.props.handleCheckboxes(checkboxes);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="filter-form">
          <FilterChecklistContainer
            name="Liquor"
            category="liquor"
            checkboxes={this.props.checkboxes}
            handleChange={this.handleChange}
          />
          <FilterChecklistContainer
            name="Ingredients"
            category="ingredient"
            checkboxes={this.props.checkboxes}
            handleChange={this.handleChange}
          />

          <button className="filter-button">Submit</button>
          <button className="filter-button" onClick={this.handleClear}>
            Clear
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checklist);
