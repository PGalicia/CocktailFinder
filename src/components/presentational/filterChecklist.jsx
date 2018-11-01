import React from "react";
import "../../style/checkbox.css";

const FilterChecklist = props => (
  <React.Fragment>
    <h2 className="filter-title">{props.name}</h2>
    <div className="filter-list">
      {props.checkboxes
        .filter(checkbox => checkbox.category === props.category)
        .map(checkbox => {
          return (
            <label className="switch" key={checkbox.id}>
              <input
                id={checkbox.id}
                type="checkbox"
                value={checkbox.isChecked}
                name={checkbox.name}
                checked={checkbox.isChecked}
                onChange={props.handleChange}
              />
              <span className="toggle">{checkbox.name}</span>
            </label>
          );
        })}
    </div>
  </React.Fragment>
);

export default FilterChecklist;
