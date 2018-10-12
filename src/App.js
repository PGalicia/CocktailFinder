import React, { Component } from 'react';
import Checklist from './components/checklist';
import './style/App.css';
import { UNFORGETTABLES } from './cocktail'
import {retrieveAlcohol, retrieveIngredients} from './utils';

class App extends Component {
  state = {
    cocktails: UNFORGETTABLES,
    alcohol: retrieveAlcohol(UNFORGETTABLES),
    ingredients: retrieveIngredients(UNFORGETTABLES),
    selectedLiquor: [],
    checkboxes: [],
    selected: [
      { category: "liquor", chosen: [] },
      { category: "ingredients", chosen: [] }
    ]
  }

  constructor() {
    super();
    
    // State Setup
    this.setupCheckbox = this.setupCheckbox.bind(this);

    // Event Handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);

    // Other?
    // this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    this.setupCheckbox();
    // console.log(Object.keys(this.state.cocktails))
    // console.log(this.state.cocktails["White Lady"].liquor);
    console.log(this.state.alcohol);
    console.log(this.state.ingredients);
  }

  // Need to fix duplicate issues
  // filter() {
  //   // console.log(this.state.selectedLiquor);
  //   let result = [...this.state.result];
  //   // check if liquor is in the iterated cocktail
  //   // if so find it and add it to 'result'
  //   for(let cocktail in this.state.cocktails) {
  //     let cocktailLiquor = this.state.cocktails[cocktail].liquor;
  //     for(let liquor of this.state.selectedLiquor) {
  //       if(cocktailLiquor.includes(liquor) === true) {
  //         result.push(cocktail);
  //       }
  //     }
  //   }

  //   this.setState({result});
  // }

  // Only LIQUOR for now. Most likely need to refactor it to take in just LIQUOR category
  // or possibly add a new method
  setupCheckbox() {
    let checkboxes = [...this.state.checkboxes];
    let count = 0;
    
    for(let id = count; id < this.state.alcohol.length ;id++) {
      let key = this.state.alcohol[id];
      let template = { id: id, category: 'liquor', name: key, isChecked: false };
      checkboxes.push(template);
      count++;
    }

    for(let id = 0; id < this.state.ingredients.length; id++) {
      let key = this.state.ingredients[id];
      let template = { id: count, category: 'ingredient', name: key, isChecked: false };
      checkboxes.push(template);
      count++;
    }

    this.setState({checkboxes});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    // Add the selected state to the 'selectedLiquor' array
    let selected = [...this.state.selected];

    // reset chosen items
    for(let category of selected) {
      category.chosen = [];
    }
    
    // Handle liquor
    this.state.checkboxes.forEach(liquor => {
      if(liquor.category === "liquor" && liquor.isChecked === true && selected[0].chosen.includes(liquor.name) === false) {
        selected[0].chosen.push(liquor.name);
        // selected.push(element.id);
      }
    });

    // Handle Ingredients
    this.state.checkboxes.forEach(ingredient => {
      if(ingredient.category === "ingredient" && ingredient.isChecked === true && selected[1].chosen.includes(ingredient.name) === false) {
        selected[1].chosen.push(ingredient.name);
        // selected.push(element.id);
      }
    });

    this.setState({selected});
    // this.setState({test: true});
    
    // Reset 'checkboxes' - put to a new function
    // this.filter();
  }
  
  handleChange(e) {
    // console.log(this.state.checkboxes);
    let checkboxes = [...this.state.checkboxes];
    let bool = e.target.value === "false" ? true : false;
    checkboxes[+e.target.id].isChecked = bool;
    this.setState({checkboxes});
  }

  handleClear(e) {
    let checkboxes = [...this.state.checkboxes];
    checkboxes.forEach(function(index) {
      index.isChecked = false;
    })
    this.setState({checkboxes});
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <ul>
          {this.state.selectedLiquor.map(selected => {
            return <li key={selected}>{selected}</li>
          })}
        </ul>
        <Checklist 
          checkboxes={this.state.checkboxes}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
        <h3>Result:</h3>
        <h5>Liquor</h5>
        <ul>
          {
            this.state.selected[0].chosen.map(chosen => {
              return <li key={chosen}>{chosen}</li>
            })
          }
        </ul>
        <h5>Ingredients</h5>
        <ul>
          {
            this.state.selected[1].chosen.map(chosen => {
              return <li key={chosen}>{chosen}</li>
            })
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default App;


// ACCESS DATA - DRAFT
// {
//   Object.entries(this.state.cocktails.Alexander).map(([key, value]) => {
//     if(typeof value === "string") {
//       return <li key={key}>{key}: {value}</li>
//     } 
//     else if(key === "ingredients"){
//       return null;
//     } else {
//       return <li key={key}>{key}: {value.map(val => <span key={val}>{val}</span> )}</li>
//     }
//   })
// }