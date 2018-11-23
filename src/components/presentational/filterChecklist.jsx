import React, { Component } from "react";
import "../../style/checklist.css";

class FilterChecklist extends Component {
  state = {
    isExpanded: false
  };

  constructor() {
    super();

    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    return (
      <div className="collapsible">
        <div
          className="filter-title"
          id={this.props.category}
          onClick={this.toggleCollapsible}
        >
          <h2>{this.props.name}</h2>
          <span>
            {this.state.isExpanded
              ? String.fromCharCode(43)
              : String.fromCharCode(8722)}
          </span>
        </div>
        {!this.state.isExpanded && (
          <div className="filter-list">
            {this.props.checkboxes
              .filter(checkbox => checkbox.category === this.props.category)
              .map(checkbox => {
                return (
                  <label className="switch" key={checkbox.id}>
                    <input
                      id={checkbox.id}
                      type="checkbox"
                      value={checkbox.isChecked}
                      name={checkbox.name}
                      checked={checkbox.isChecked}
                      onChange={this.props.handleChange}
                    />
                    <span className="toggle">{checkbox.name}</span>
                  </label>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default FilterChecklist;
