import React from "react";

function CharacterCard(props) {
  const imageSize = props.imageSize;
  return (
    <div>
      <div className="w-5/6 my-5">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src={`${props.character.path}/${imageSize}.${props.character.extension}`}
            alt={props.character.name}
            className="w-full h-full rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{props.character.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
