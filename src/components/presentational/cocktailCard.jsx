/*
  Description: Cards that displays cocktail's information
*/

import React, { Component } from "react";
import "../../style/cocktailCard.css";

import { connect } from "redux";

class CocktailCard extends Component {
  state = {
    isOpen: false
  };

  constructor() {
    super();

    this.toggleCocktailCard = this.toggleCocktailCard.bind(this);
  }

  toggleCocktailCard() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div
        key={this.props.cocktail.name}
        className="cocktail-card"
        onClick={this.toggleCocktailCard}
        style={this.state.isOpen ? { gridRow: "span 2" } : null}
      >
        <h2>{this.props.cocktail.name}</h2>
        <div className="cocktail-name">
          <p className="label">Alcohol</p>
          <div className="item-list">
            {this.props.cocktail.alcohol.map(alc => {
              return (
                <div className="text" key={alc}>
                  <p>{alc.toLowerCase()}</p>
                  <span className="dotted" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="cocktail-garnish">
          <p className="label">Garnish</p>
          <div className="item-list">
            {this.props.cocktail.garnish.map(gar => {
              return (
                <div className="text" key={gar}>
                  <p>{gar.toLowerCase()}</p>
                  <span className="dotted" />
                </div>
              );
            })}
            {this.props.cocktail.garnish.length === 0 ? (
              <div className="text">
                <p>
                  <i>n/a</i>
                </p>
                <span className="dotted" />
              </div>
            ) : null}
          </div>
        </div>
        <div className="cocktail-ingredients">
          <p className="label">Ingredients</p>
          <div className="item-list">
            {this.props.cocktail.ingredients.map(ingre => {
              return (
                <div className="text" key={ingre}>
                  <p>{ingre.toLowerCase()}</p>
                  <span className="dotted" />
                </div>
              );
            })}
          </div>
        </div>
        {this.state.isOpen && <div className="popup">Popup appears</div>}
      </div>
    );
  }
}

export default CocktailCard;

// const CocktailCard = props => (
//   <div key={props.cocktail.name} className="cocktail-card">
//     <h2>{props.cocktail.name}</h2>
//     <div className="cocktail-name">
//       <p className="label">Alcohol</p>
//       <div className="item-list">
//         {props.cocktail.alcohol.map(alc => {
//           return (
//             <div className="text" key={alc}>
//               <p>{alc.toLowerCase()}</p>
//               <span className="dotted" />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     <div className="cocktail-garnish">
//       <p className="label">Garnish</p>
//       <div className="item-list">
//         {props.cocktail.garnish.map(gar => {
//           return (
//             <div className="text" key={gar}>
//               <p>{gar.toLowerCase()}</p>
//               <span className="dotted" />
//             </div>
//           );
//         })}
//         {props.cocktail.garnish.length === 0 ? (
//           <div className="text">
//             <p>
//               <i>n/a</i>
//             </p>
//             <span className="dotted" />
//           </div>
//         ) : null}
//       </div>
//     </div>
//     <div className="cocktail-ingredients">
//       <p className="label">Ingredients</p>
//       <div className="item-list">
//         {props.cocktail.ingredients.map(ingre => {
//           return (
//             <div className="text" key={ingre}>
//               <p>{ingre.toLowerCase()}</p>
//               <span className="dotted" />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     <div className="popup">Popup appears</div>
//   </div>
// );

// export default CocktailCard;
