import React from "react";

const SelectedContainer = props => (
  <React.Fragment>
    <h4>{props.name}</h4>
    <ul>
      {props.selected
        .find(chosen => chosen.category === props.category)
        .chosen.map(chosen => {
          return (
            <li key={chosen}>
              <div>{chosen}</div>
            </li>
          );
        })}
    </ul>
  </React.Fragment>
);

export default SelectedContainer;
