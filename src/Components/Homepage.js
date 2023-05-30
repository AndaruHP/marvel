import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1>MARVEL WIKI</h1>
        <p className="homepage-container-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="/characters">
          <button>Masuk ke laman utama</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
