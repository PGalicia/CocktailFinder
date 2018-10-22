import React from "react";
import "../../style/checkbox.css";

const FilterChecklistContainer = props => (
  <React.Fragment>
    <h2>{props.name}</h2>
    {props.checkboxes
      .filter(checkbox => checkbox.category === props.category)
      .map(checkbox => {
        return (
          <div key={checkbox.id} className="checkbox">
            <label htmlFor={checkbox.id}>{checkbox.name}</label>
            <input
              id={checkbox.id}
              type="checkbox"
              value={checkbox.isChecked}
              name={checkbox.name}
              checked={checkbox.isChecked}
              onChange={props.handleChange}
            />
          </div>
        );
      })}
  </React.Fragment>
);

export default FilterChecklistContainer;
