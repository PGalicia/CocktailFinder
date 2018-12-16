import React from "react";
import "../../style/displayCocktail.css";
import Result from "../presentational/result";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    cocktails: state.cocktails
  };
};

const DisplayCocktail = props => (
  <React.Fragment>
    <Result name="n/a" result={props.cocktails} />
  </React.Fragment>
);

export default connect(
  mapStateToProps,
  null
)(DisplayCocktail);
