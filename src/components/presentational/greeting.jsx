/*
  Description: The greeting page
*/

import React from "react";
import "../../style/greeting.css";

// Redux
import { connect } from "react-redux";

import { closeGreetingMessage } from "../../actions";

const mapDispatchToProps = dispatch => {
  return {
    closeGreetingMessage: bool => dispatch(closeGreetingMessage(bool))
  };
};

const Greeting = props => {
  return (
    <div className="greeting-container">
      <div className="greeting-card">
        <h2>Hello</h2>
        <p>
          You look like you need a <span>drink</span>
        </p>
        <p>
          Bottom text bottom text bottom text.
          <br />
          The International Bartenders Association (IBA) identifies 77 cocktails
          that ...
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button onClick={() => props.closeGreetingMessage(false)}>ok!</button>
      </div>
    </div>
  );
};

// export default Greeting;
export default connect(
  null,
  mapDispatchToProps
)(Greeting);
