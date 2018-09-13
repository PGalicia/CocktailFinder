import React, { Component } from 'react';
import Checklist from './components/checklist';
import './style/App.css';
import { UNFORGETTABLES, LIQUOR } from './cocktail'

class App extends Component {
  state = {
    cocktails: UNFORGETTABLES,
    selectedLiquor: [],
    checkboxes: [],
    result: [],
    test: false
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
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    this.setupCheckbox();
    // console.log(Object.keys(this.state.cocktails))
    // console.log(this.state.cocktails["White Lady"].liquor);
  }

  // Need to fix duplicate issues
  filter() {
    // console.log(this.state.selectedLiquor);
    let result = [];
    // check if liquor is in the iterated cocktail
    // if so find it and add it to 'result'
    for(let cocktail in this.state.cocktails) {
      let cocktailLiquor = this.state.cocktails[cocktail].liquor;
      for(let liquor of this.state.selectedLiquor) {
        if(cocktailLiquor.includes(liquor) === true) {
          result.push(cocktail);
        }
      }
    }

    this.setState({result});
  }

  // Only LIQUOR for now. Most likely need to refactor it to take in just LIQUOR category
  // or possibly add a new method
  setupCheckbox() {
    let checkboxes = [];
    
    for(let id = 0; id < LIQUOR.length ;id++) {
      let key = LIQUOR[id];
      let template = { id: id, name: key, isChecked: false };
      checkboxes.push(template);
    }
    
    this.setState({checkboxes});
  }

  handleSubmit(e) {
    e.preventDefault();

    // Add the selected state to the 'selectedLiquor' array
    let selected = [];
    this.state.checkboxes.forEach(function(element) {
      if(element.isChecked === true) {
        selected.push(element.name);
        // selected.push(element.id);
      }
    });
    this.setState({selectedLiquor: selected});
    this.setState({test: true});

    // Reset 'checkboxes' - put to a new function
    this.filter();
  }

  handleChange(e) {
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
        <h3>Result</h3>
        <ul>
          {
            this.state.result.map(cocktail => {
              return <li key={cocktail}>{cocktail}</li>
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