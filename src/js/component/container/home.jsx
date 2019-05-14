import React, { Component } from "react";
import "./../../../scss/home.scss";
import { connect } from "react-redux";
import { changeGreeting } from "../../action/index.js";

const mapStateToProps = state => {
  return {
    greetingMessage: state.greetingMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeGreeting: greeting => dispatch(changeGreeting(greeting))
  };
};

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <h1>{this.props.greetingMessage}</h1>
        <button onClick={() => this.props.changeGreeting("Hi World!")}>
          Change greeting
        </button>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
