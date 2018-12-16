import React from "react";
// import CocktailCard from "./cocktailCard";
import FilterResult from "../presentational/filterResult";
import "../../style/result.css";

const ResultContainer = props => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ResultContainer;

// Might need to delete this -- probably useless
// const ResultContainer = props => {
//   return (
//     <div className="cocktail-container">
//       {props.name !== "n/a" ? <h4>{props.name}</h4> : null}
//       <div className="cocktail-list">
//         {props.result.map(cocktail => {
//           return <CocktailCard cocktail={cocktail} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default ResultContainer;
