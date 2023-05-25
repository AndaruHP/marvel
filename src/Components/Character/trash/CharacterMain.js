import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import CharactersPagination from "./CharacterPagination";
import "./CharacterMain.css";

function CharacterMain() {
  const [pageCount, setPageCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [characterData, setCharacterData] = useState([]);
  const [input, setInput] = useState("");

  const limit = 20;
  let inputTemp = "_";

  const apiKey = `&ts=1&apikey=59a37f6f5c3b4b8e2c84d5b4c8d76a2a&hash=a0100f93ebce101bcb3019dc8d9c57d0&limit=${limit}&offset=${offset}`;

  function fetchCharacter(input) {
    if (input === "") {
      inputTemp = "_";
    } else {
      inputTemp = input;
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
            comic: characterData.collectionURI,
          };
        });
        setCharacterData(transformedData);
        setPageCount(Math.ceil(data.data.total / limit));
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
  }, [input, offset]);

  const [isHovered, setIsHovered] = useState(true);
  const imageSize = "potrait_incredible";

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="search character"
          value={input}
          onChange={(event) => setInputHandler(event.target.value)}
        />
      </div>
      {characterData.map((characterProps) => (
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={`${characterProps.path}/${imageSize}.${characterProps.extension}`}
            alt={characterProps.name}
          />
          <h2>{characterProps.name}</h2>
          <div className={`description ${isHovered ? "show" : "hide"}`}>
            <p>{characterProps.description}</p>
          </div>
        </div>
      ))}
      <div className="pagination">
        <CharactersPagination
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
}

export default CharacterMain;
