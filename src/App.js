import React, { Component } from 'react';
import Checklist from './components/checklist';
import './style/App.css';
import { connect } from "react-redux";
import { handleCheckboxes } from "./actions/action-types"


const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    handleCheckboxes: checkboxes => dispatch(handleCheckboxes(checkboxes))
  };
}

class App extends Component {

  constructor() {
    super();
    
    // State Setup
    this.setupCheckbox = this.setupCheckbox.bind(this);
  }

  componentDidMount() {
    this.setupCheckbox();
  }

  setupCheckbox() {
    let checkboxes = [...this.props.checkboxes];
    let count = 0;
    
    for(let id = count; id < this.props.alcohol.length ;id++) {
      let key = this.props.alcohol[id];
      let template = { id: id, category: 'liquor', name: key, isChecked: false };
      checkboxes.push(template);
      count++;
    }

    for(let id = 0; id < this.props.ingredients.length; id++) {
      let key = this.props.ingredients[id];
      let template = { id: count, category: 'ingredient', name: key, isChecked: false };
      checkboxes.push(template);
      count++;
    }

    this.props.handleCheckboxes(checkboxes);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <Checklist />
        <h3>Result:</h3>
        <h5>Liquor</h5>
        <ul>
          {
            this.props.selected[0].chosen.map(chosen => {
              return <li key={chosen}>{chosen}</li>
            })
          }
        </ul>
        <h5>Ingredients</h5>
        <ul>
          {
            this.props.selected[1].chosen.map(chosen => {
              return <li key={chosen}>{chosen}</li>
            })
          }
        </ul>
        {/* at least one match */}
        <h5>Close cocktail</h5>
        <ul>
        {
            this.props.closeCocktails.map(cocktail => {
              return <li key={cocktail.name}>{cocktail.name}</li>
            })
          }
        </ul>
        {/* exact match */}
        <h5>Possible cocktail</h5>
        <ul>
        {
            this.props.possibleCocktails.map(cocktail => {
              return <li key={cocktail.name}>{cocktail.name}</li>
            })
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);