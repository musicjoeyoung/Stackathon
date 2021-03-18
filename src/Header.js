import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="main-container">
      <div className="nav-bar-container">
        <nav id="nav">
          <h1 id="main-title">Music World</h1>
          <Link className="nav-bar-routes" to="/">
            Home
          </Link>
          <Link className="nav-bar-routes" to="/trumpet">
            Trumpet
          </Link>
          <Link className="nav-bar-routes" to="/resources">
            Resources
          </Link>
          <Link className="nav-bar-routes" to="/metronome">
            Metronome
          </Link>
          <Link className="nav-bar-routes" to="/practiceroom">
            Practice Room
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default Header;
