import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1>MARVEL WIKI</h1>
        <Link to="/characters">
          <button>Masuk ke laman utama</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
