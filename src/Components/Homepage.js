import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1>MARVEL WIKI</h1>
        <p className="homepage-container-p">
          Welcome to Marvel Wiki! <br /> Explore the extraordinary world of the
          Marvel Universe with us. <br /> Begin your adventure by pressing the
          button below.
        </p>
        <Link to="/characters">
          <button>"Unleash the Marvel Magic!"</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
