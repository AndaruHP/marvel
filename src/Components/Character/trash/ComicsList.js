import React, { useEffect, useState } from "react";
import CharactersPagination from "./CharactersPagination";
import ComicsCard from "./ComicsCard";
import "./CardX.css";

function ComicsList() {
  const [pageCount, setPagecount] = useState(0);
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [comicData, setcomicData] = useState([]);
  const [input, setInput] = useState("");
  const apiKey = `&ts=1&apikey=59a37f6f5c3b4b8e2c84d5b4c8d76a2a&hash=a0100f93ebce101bcb3019dc8d9c57d0&limit=${limit}&offset=${offset}`;

  //   const imageSize = "portrait_incredible";

  let inputTemp = "_";

  function fetchComics(input) {
    if (input === "") {
      inputTemp = "_";
    } else {
      inputTemp = input;
    }

    fetch(
      `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${inputTemp}${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedComics = data.data.results.map((comicData) => {
          return {
            id: comicData.id,
            title: comicData.title,
            description: comicData.description || "Description not found",
            path: comicData.thumbnail.path,
            extension: comicData.thumbnail.extension,
            total: data.data.total,
            comic: comicData.collectionURI,
          };
        });
        setcomicData(transformedComics);
        setPagecount(Math.ceil(data.data.total / limit));
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
          <ComicsCard key={characterProps.id} characterProps={characterProps} />
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

export default ComicsList;
