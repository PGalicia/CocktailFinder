import React from "react";

const FilterChecklistContainer = props => (
  <React.Fragment>
    <h2>{props.name}</h2>
    {props.checkboxes
      .filter(checkbox => checkbox.category === props.category)
      .map(checkbox => {
        return (
          <React.Fragment key={checkbox.id}>
            <label htmlFor={checkbox.id}>{checkbox.name}</label>
            <input
              id={checkbox.id}
              type="checkbox"
              value={checkbox.isChecked}
              name={checkbox.name}
              checked={checkbox.isChecked}
              onChange={props.handleChange}
            />
          </React.Fragment>
        );
      })}
  </React.Fragment>
);

export default FilterChecklistContainer;
