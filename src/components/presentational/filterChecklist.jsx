import React from "react";
import "../../style/checklist.css";

const FilterChecklist = props => (
  <div className="collapsible">
    <div className="filter-title" id={props.category}>
      <h2>{props.name}</h2>
    </div>
    {/* <div className="filter-list">
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
    </div> */}
  </div>
);

export default FilterChecklist;
