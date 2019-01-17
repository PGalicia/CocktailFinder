import React, { Component } from "react";
import FilterResult from "../presentational/filterResult";
import "../../style/result.css";

import { Scrollbars } from "react-custom-scrollbars";

import { calculateGridCount } from "../../utils";

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      gridCount: 1
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateGridColumnCount = this.updateGridColumnCount.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.updateGridColumnCount();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("resize", this.updateGridColumnCount);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("resize", this.updateGridColumnCount);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  updateGridColumnCount() {
    this.setState({ gridCount: calculateGridCount(this.state.width) });
    console.log(`gridCount: ${this.state.gridCount}`);
  }

  render() {
    return (
      <Scrollbars style={{ height: "100vh" }}>
        <div
          className="result-container"
          style={{
            gridTemplateColumns: `repeat(${this.state.gridCount}, auto)`
          }}
        >
          <div
            className="box"
            style={{
              gridTemplateColumns: `repeat(${this.state.gridCount}, auto)`
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, te aliquam instructior vis. No ius
              equidem delectus, sit denique constituam theophrastus in. Animal
              nostrum vel te, alia omnis has ea, cu eum oblique suscipit. Cu
              nulla deserunt hendrerit mea, putant theophrastus qui ex. Cum eu
              prima accumsan, ne labores lobortis sit.
            </p>
            <p>
              Mel purto dolorum definitionem ad. Mei no dictas qualisque
              maiestatis, eum eu munere prompta nominati. Pro et modo reque
              reprimique. Ipsum dicunt at mel, vis in choro possit.
            </p>
          </div>
          <FilterResult name="you can make" result={this.props.possible} />
          <FilterResult name="you can almost make" result={this.props.close} />
        </div>
      </Scrollbars>
    );
  }
}

// const Result = props => {
//   return (
//     <div className="result-container">
//       <div className="box">
//         <p>
//           Lorem ipsum dolor sit amet, te aliquam instructior vis. No ius equidem
//           delectus, sit denique constituam theophrastus in. Animal nostrum vel
//           te, alia omnis has ea, cu eum oblique suscipit. Cu nulla deserunt
//           hendrerit mea, putant theophrastus qui ex. Cum eu prima accumsan, ne
//           labores lobortis sit.
//         </p>
//         <p>
//           Mel purto dolorum definitionem ad. Mei no dictas qualisque maiestatis,
//           eum eu munere prompta nominati. Pro et modo reque reprimique. Ipsum
//           dicunt at mel, vis in choro possit.
//         </p>
//       </div>
//       <FilterResult name="you can make" result={props.possible} />
//       <FilterResult name="you can almost make" result={props.close} />
//     </div>
//   );
// };

export default Result;
