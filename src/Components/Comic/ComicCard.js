import React, { useState } from "react";
import "../Card.css";

function ComicCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const imageSize = "portrait_incredible";
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="zoom">
          <div className="cards">
            <img
              src={`${props.characterProps.path}/${imageSize}.${props.characterProps.extension}`}
              alt={props.characterProps.title}
            />
              <h2 style={{color:"white"}}>{props.characterProps.title}</h2>
          </div>
        </div>
        <div className={`description ${isHovered ? "show" : "hide"}`}>
          <p>{props.characterProps.description}</p>
        </div>
      </div>
  );
}

export default ComicCard;
