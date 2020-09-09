import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <h1>Weather App</h1>
      </div>
      <ul>
        <Link to="/" className="feature">
          <li>Home</li>
        </Link>
        <Link to="/about" className="feature">
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
