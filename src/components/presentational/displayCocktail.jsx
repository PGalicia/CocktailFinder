/*
    Description: List all cocktails
*/

import React, { Component } from "react";
import "../../style/displayCocktail.css";

// Container Component
import CocktailCard from "../presentational/cocktailCard";

// utils
import { calculateChunks } from "../../utils";

import { Scrollbars } from "react-custom-scrollbars";

class DisplayCocktail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      gridCount: 0
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
    let count = this.state.width > 1200 ? 2 : 1;
    this.setState({ gridCount: count });
    console.log(`gridCount: ${this.state.gridCount}`);
  }

  render() {
    return (
      <div className="cocktail-container">
        <Scrollbars style={{ height: "100vh" }}>
          {this.props.name !== "n/a" ? <h4>{this.props.name}</h4> : null}
          <div
            className="cocktail-list"
            style={{
              gridTemplateColumns: `repeat(${this.state.gridCount}, auto)`
            }}
          >
            {calculateChunks(this.props.result, 2).map(chunk => {
              return (
                <div className="cocktail-column" key={chunk[0].name}>
                  {chunk.map(cocktail => {
                    return (
                      <CocktailCard key={cocktail.name} cocktail={cocktail} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Scrollbars>
      </div>
    );
  }
}

// const DisplayCocktail = props => {
//   if (window.innerWidth > 1200) console.log("hit");

//   return (
//     <div className="cocktail-container">
//       <Scrollbars style={{ height: "100vh" }}>
//         {props.name !== "n/a" ? <h4>{props.name}</h4> : null}
//         <div className="cocktail-list">
//           {calculateChunks(props.result, 2).map(chunk => {
//             return (
//               <div className="cocktail-column" key={chunk[0].name}>
//                 {chunk.map(cocktail => {
//                   return (
//                     <CocktailCard key={cocktail.name} cocktail={cocktail} />
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//       </Scrollbars>
//     </div>
//   );
// };

export default DisplayCocktail;
