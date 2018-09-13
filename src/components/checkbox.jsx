import React, { Component } from "react";

class Checkbox extends Component {
  //   state = {
  //     name: this.props.name,
  //     isChecked: false
  //   };
  render() {
    return (
      <React.Fragment>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <input
          id={this.props.id}
          type="checkbox"
          value={this.props.isChecked}
          name={this.props.name}
          checked={this.props.isChecked}
          onChange={this.props.handleChange}
        />
      </React.Fragment>
    );
  }
}

export default Checkbox;
