import React, { Component } from "react";
import "../../style/home.css";

// Components - Container
import Checklist from "./checklist";

// Components - Presentational
import Selected from "../presentational/selected";
import Result from "../presentational/result";
import Greeting from "../presentational/greeting";
import FilterResult from "../presentational/filterResult";

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
    return (
      <div className="home-container">
        {/* <Checklist /> */}
        {/* <Result name="n/a" result={this.props.cocktails} /> */}
        {/* <Greeting /> */}
        {/* {notEmpty && (
          <React.Fragment>
            <Selected selected={this.props.selected} />
            <h2>Result:</h2>
            <Result
              name="Possible Cocktail"
              result={this.props.possibleCocktails}
            />
            <Result name="Close Cocktail" result={this.props.closeCocktails} />
          </React.Fragment>
        )} */}
        {/* <Selected selected={this.props.selected} /> */}
        <div className="box">
          <p>
            Lorem ipsum dolor sit amet, te aliquam instructior vis. No ius
            equidem delectus, sit denique constituam theophrastus in. Animal
            nostrum vel te, alia omnis has ea, cu eum oblique suscipit. Cu nulla
            deserunt hendrerit mea, putant theophrastus qui ex. Cum eu prima
            accumsan, ne labores lobortis sit.
          </p>
          <p>
            Mel purto dolorum definitionem ad. Mei no dictas qualisque
            maiestatis, eum eu munere prompta nominati. Pro et modo reque
            reprimique. Ipsum dicunt at mel, vis in choro possit.
          </p>
        </div>
        <FilterResult
          name="you can make"
          result={this.props.possibleCocktails}
        />
        <FilterResult
          name="you can almost make"
          result={this.props.closeCocktails}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
