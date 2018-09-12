import React, { Component } from 'react';
import Checklist from './components/checklist';
import './style/App.css';
import COCKTAILS from './cocktail';

class App extends Component {
  state = {
    cocktails: COCKTAILS,
    selected: [
      { category: "alcohol", checked: ["alc1", "alc2"] },
      { category: "ingredients", checked: ["ingre1", "ingre2", "ingre3"] }
    ],
    result: [],
    checkboxes: [
      { id: 0, isChecked: false },
      { id: 1, isChecked: false }
    ]
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // Add the selected state to the 'result' array
    let selected = [];
    this.state.checkboxes.forEach(function(element) {
      if(element.isChecked === true) {
        selected.push(element.id);
      }
    });
    this.setState({result: selected});

    // Reset 'checkboxes' - put to a new function

  }

  handleChange(e) {
    let checkboxes = [...this.state.checkboxes];
    let bool = e.target.value === "false" ? true : false;
    checkboxes[+e.target.name].isChecked = bool;
    this.setState({checkboxes});
    console.log(e.target.checked)
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
          {this.state.result.map(selected => {
            return <li key={selected}>{selected}</li>
          })}
        </ul>
        <Checklist 
          checkboxes={this.state.checkboxes}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleClear={this.handleClear}
        />
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