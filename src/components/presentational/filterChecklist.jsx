import React, { Component } from "react";
import "../../style/checklist.css";
import Checkbox from "./checkbox";

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

  toggleCheckboxChangeStyle() {}

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
                  <Checkbox
                    key={checkbox.id}
                    checkbox={checkbox}
                    handleChange={this.props.handleChange}
                  />
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export default FilterChecklist;
