import React from "react";
import "../../style/selected.css";

const SelectedContainer = props => (
  <React.Fragment>
    <ul className="selected-list">
      <h2>Selected:</h2>
      {props.selected.map(category => {
        return category.chosen.map(chosen => (
          <li key={chosen} className="selected" id={category.category}>
            <div>{chosen}</div>
          </li>
        ));
      })}
    </ul>
  </React.Fragment>
);

export default SelectedContainer;
