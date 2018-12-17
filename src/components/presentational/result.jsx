import React from "react";
import FilterResult from "../presentational/filterResult";
import "../../style/result.css";

const Result = props => {
  return (
    <div className="result-container">
      <div className="box">
        <p>
          Lorem ipsum dolor sit amet, te aliquam instructior vis. No ius equidem
          delectus, sit denique constituam theophrastus in. Animal nostrum vel
          te, alia omnis has ea, cu eum oblique suscipit. Cu nulla deserunt
          hendrerit mea, putant theophrastus qui ex. Cum eu prima accumsan, ne
          labores lobortis sit.
        </p>
        <p>
          Mel purto dolorum definitionem ad. Mei no dictas qualisque maiestatis,
          eum eu munere prompta nominati. Pro et modo reque reprimique. Ipsum
          dicunt at mel, vis in choro possit.
        </p>
      </div>
      <FilterResult name="you can make" result={props.possible} />
      <FilterResult name="you can almost make" result={props.close} />
    </div>
  );
};

export default Result;
