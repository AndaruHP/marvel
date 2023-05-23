import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function CharacterMain() {
  const limit = 20;
  const offset = 0;

  const [character, setCharacter] = useState([]);

  function fetchCharacterHandler(limit, offset) {
    fetch(
      `http://gateway.marvel.com/v1/public/events?limit=${limit}&offset=${offset}&ts=1&apikey=59a37f6f5c3b4b8e2c84d5b4c8d76a2a&hash=a0100f93ebce101bcb3019dc8d9c57d0`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedCharacter = data.data.results.map((characterData) => {
          return {
            id: characterData.id,
            name: characterData.title,
            description: characterData.description || "Description not found",
            path: characterData.thumbnail.path,
            extension: characterData.thumbnail.extension,
          };
        });
        setCharacter(transformedCharacter);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchCharacterHandler(limit, offset);
  }, []);

  const imageSize = "portrait_incredible";

  return (
    <div className="grid grid-cols-5">
      {character.map((char) => (
        <CharacterCard key={char.id} character={char} imageSize={imageSize} />
      ))}
    </div>
  );
}

export default CharacterMain;
