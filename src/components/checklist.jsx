import React, { Component } from "react";
import Checkbox from "./checkbox";

class Checklist extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <React.Fragment>
            {this.props.checkboxes.map(checkbox => (
              <Checkbox
                key={checkbox.id}
                id={checkbox.id}
                isChecked={checkbox.isChecked}
                handleChange={this.props.handleChange}
              />
            ))}
          </React.Fragment>
          <input type="submit" />
          <button onClick={this.props.handleClear}>Clear</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Checklist;
