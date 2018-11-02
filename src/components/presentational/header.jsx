import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Cocktail Finder</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cocktaildb">Cocktails</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
