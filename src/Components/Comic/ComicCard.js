import React, { useState } from "react";
import "./ComicCard.css";

function ComicCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const imageSize = "portrait_incredible";
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`${props.characterProps.path}/${imageSize}.${props.characterProps.extension}`}
        alt={props.characterProps.title}
      />
      <h2>{props.characterProps.title}</h2>
      <div className={`description ${isHovered ? "show" : "hide"}`}>
        <p>{props.characterProps.description}</p>
      </div>
    </div>
  );
}

export default ComicCard;
