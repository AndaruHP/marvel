import React, { useEffect, useState } from "react";
import CharactersPagination from "./CharactersPagination";
import CharactersCard from "./CharactersCard";
import "./CardX.css";

function CharacterList() {
  const [pageCount, setPagecount] = useState(0);
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [characterData, setCharacterData] = useState([]);
  const [comicData, setComicData] = useState([]);
  const [input, setInput] = useState("");
  let inputTemp = "_";

  const apiKey =
    "&ts=1&apikey=59a37f6f5c3b4b8e2c84d5b4c8d76a2a&hash=a0100f93ebce101bcb3019dc8d9c57d0";

  function fetchCharacter(input) {
    if (input === "") {
      inputTemp = "_";
    } else {
      inputTemp = input;
    }

    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputTemp}&limit=${limit}&offset=${offset}${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.data.results.map((characterData) => {
          return {
            id: characterData.id,
            name: characterData.name,
            description: characterData.description || "Description not found",
            path: characterData.thumbnail.path,
            extension: characterData.thumbnail.extension,
            total: data.data.total,
            collectionURI: characterData.comics.collectionURI,
          };
        });
        setCharacterData(transformedData);
        setPagecount(Math.ceil(data.data.total / limit));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchComics(collectionURI) {
    fetch(`${collectionURI} + "?" + ${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const comics = data.data.results.map((comicData) => {
          return {
            id: comicData.id,
            title: comicData.title,
            description: comicData.description || "Description not found",
            path: comicData.thumbnail.path,
            extension: comicData.thumbnail.extension,
          };
        });
        setComicData(comics);
        console.log(comics);
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
    setOffset(newOffset);
  }

  useEffect(() => {
    fetchCharacter(input);
    fetchComics(input);
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
        {comicData.map((characterProps) => (
          <CharactersCard
            key={characterProps.id}
            characterProps={characterProps}
            fetchComics={fetchComics}
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

export default CharacterList;
