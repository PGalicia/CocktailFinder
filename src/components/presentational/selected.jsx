import React from "react";

const SelectedContainer = props => (
  <React.Fragment>
    <ul>
      {props.selected.map(category => {
        return category.chosen.map(chosen => (
          <li key={chosen}>
            <div>{chosen}</div>
          </li>
        ));
      })}
    </ul>
  </React.Fragment>
);

export default SelectedContainer;
