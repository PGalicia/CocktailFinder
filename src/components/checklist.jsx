import React, { Component } from "react";
import Checkbox from "./checkbox";

class Checklist extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <React.Fragment>
            <h4>Liquor</h4>
            {this.props.checkboxes.map(checkbox => {
              if (checkbox.category === "liquor") {
                return (
                  <Checkbox
                    key={checkbox.id}
                    id={checkbox.id}
                    name={checkbox.name}
                    isChecked={checkbox.isChecked}
                    handleChange={this.props.handleChange}
                  />
                );
              }
              return null;
            })}
          </React.Fragment>
          <React.Fragment>
            <h4>Ingredients</h4>
            {this.props.checkboxes.map(checkbox => {
              if (checkbox.category === "ingredient") {
                return (
                  <Checkbox
                    key={checkbox.id}
                    id={checkbox.id}
                    name={checkbox.name}
                    isChecked={checkbox.isChecked}
                    handleChange={this.props.handleChange}
                  />
                );
              }
              return null;
            })}
          </React.Fragment>
          <div>
            <input type="submit" />
            <button onClick={this.props.handleClear}>Clear</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Checklist;
