import React, { useEffect, useState } from "react";
import CharactersPagination from "./CharactersPagination";
import CharactersCard from "./CharactersCard";
import "./CardX.css";

function CharacterList1() {
  const [pageCount, setPagecount] = useState(0);
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [characterData, setCharacterData] = useState([]);
  const [input, setInput] = useState("");
  const [inputTemp, setInputTemp] = useState("_");
  const apiKey = `&ts=1&apikey=59a37f6f5c3b4b8e2c84d5b4c8d76a2a&hash=a0100f93ebce101bcb3019dc8d9c57d0&limit=${limit}&offset=${offset}`;
  //   const imageSize = "portrait_incredible";

  function fetchCharacter(input) {
    if (input === "") {
      setInputTemp("_");
    } else {
      setInputTemp(input);
    }

    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputTemp}${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.data.results.map((characterData) => {
          return {
            id: characterData.id,
            name: characterData.name,
            description: characterData.description || "Description not found",
            path: characterData.thumbnail.path,
            extension: characterData.thumbnail.extension,
            total: data.data.total,
            comic: characterData.comics.items.map((comic) => {
              return {
                comicId: comic.id,
                comicApi: comic.resourceURI,
              };
            }),
          };
        });
        setCharacterData(transformedData);
        setPagecount(Math.ceil(data.data.total / limit));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchCharacterComic(characterId) {
    const character = characterData.find(
      (character) => character.id === characterId
    );
    if (!character) {
      console.log("Character not found");
      return;
    }
    if (character.comic.length === 0) {
      console.log("No comics found for this character");
      return;
    }
    const comicApi = character.comic[0].comicApi;
    fetch(`${comicApi}?${apiKey}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedComicData = data.data.results.map((characterComic) => {
          return {
            id: characterComic.id,
            title: characterComic.title,
          };
        });
        console.log(transformedComicData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function setInputHandler(input) {
    setInput(input);
    setOffset(0);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected;
    const newOffset = selectedPage * limit;
    setOffset(parseInt(newOffset));
  }

  useEffect(() => {
    fetchCharacter(input);
  }, [input, offset]);

  return (
    <div>
      <input
        type="text"
        placeholder="search character"
        value={input}
        onChange={(event) => setInputHandler(event.target.value)}
      />
      <div className="container">
        {characterData.map((characterProps) => (
          <CharactersCard
            key={characterProps.id}
            characterProps={characterProps}
          />
        ))}
      </div>
      <br />
      <br />
      <CharactersPagination
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </div>
  );
}

export default CharacterList1;
