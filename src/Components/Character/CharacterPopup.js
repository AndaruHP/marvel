import React from "react";
import "./CharacterPopup.css";

function CharacterPopup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={props.onClose}>
          x
        </button>
        <img
          src={`${props.characterProps.path}/standard_fantastic.${props.characterProps.extension}`}
          alt={props.characterProps.name}
        />
        <h2>{props.characterProps.name}</h2>
        <p>{props.characterProps.description}</p>
      </div>
    </div>
  );
}

export default CharacterPopup;
