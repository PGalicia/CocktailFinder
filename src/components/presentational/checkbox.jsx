/* 
  Description: Change form item (ie alcohol and ingredients)
    into checkbox.
*/

import React, { Component } from "react";
import "../../style/checkbox.css";

class Checkbox extends Component {
  render() {
    return (
      <label className="switch">
        <input
          id={this.props.checkbox.id}
          type="checkbox"
          value={this.props.checkbox.isChecked}
          name={this.props.checkbox.name}
          checked={this.props.checkbox.isChecked}
          onChange={this.props.handleChange}
        />
        <div
          className="toggle"
          // onClick={this.toggleCheckboxStyle}
        >
          <span id="sign">
            {this.props.checkbox.isChecked
              ? String.fromCharCode(8722)
              : String.fromCharCode(43)}
          </span>
          <span id="name">{this.props.checkbox.name.toLowerCase()}</span>
        </div>
      </label>
    );
  }
}

export default Checkbox;
