import React, { Component } from "react";
import "../../style/checkbox.css";

class Checkbox extends Component {
  constructor() {
    super();

    this.toggleCheckboxStyle = this.toggleCheckboxStyle.bind(this);
  }

  toggleCheckboxStyle() {}

  render() {
    return (
      <label className="switch" key={this.props.id}>
        <input
          id={this.props.id}
          type="checkbox"
          value={this.props.isChecked}
          name={this.props.name}
          checked={this.props.isChecked}
          onChange={this.props.handleChange}
        />
        <div className="toggle">
          <span id="sign">&#8722;</span>
          <span id="name">{this.props.name}</span>
        </div>
      </label>
    );
  }
}

export default Checkbox;
