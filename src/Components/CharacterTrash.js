import React, { useState } from "react";
import { useEffect } from "react";

function Character() {
  const [character, setCharacter] = useState([]);

  function fetchCharacterHandler() {
    fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=59a37f6f5c3b4b8e2c84d5b4c8d76a2a&hash=a0100f93ebce101bcb3019dc8d9c57d0"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedCharacter = data.results.map((characterData) => {
          return {
            id: characterData.id,
            name: characterData.name,
            description: characterData.description,
            path: characterData.thumbnail.path,
            extension: characterData.thumbnail.extension,
          };
        });
        setCharacter(transformedCharacter);
      });
  }

  useEffect(() => {
    fetchCharacterHandler();
  }, []);

  console.log(character.map((char) => char.name));

  return <div>Test</div>;
}

export default Character;
