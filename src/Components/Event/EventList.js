import React, { useEffect, useState } from "react";
import EventPagination from "./EventPagination";
import EventCard from "./EventCard";
import "../List.css";
import Footer from "../Footer";

function EventList() {
  const [pageCount, setPagecount] = useState(0);
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [characterData, setCharacterData] = useState([]);
  const [input, setInput] = useState("");
  const apiKey = `&ts=1&apikey=59a37f6f5c3b4b8e2c84d5b4c8d76a2a&hash=a0100f93ebce101bcb3019dc8d9c57d0&limit=${limit}&offset=${offset}`;
  //   const imageSize = "portrait_incredible";

  let inputTemp = "_";

  function fetchCharacter(input) {
    if (input === "") {
      inputTemp = "_";
    } else {
      inputTemp = input;
    }

    fetch(
      `https://gateway.marvel.com:443/v1/public/events?nameStartsWith=${inputTemp}${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedData = data.data.results.map((characterData) => {
          return {
            id: characterData.id,
            title: characterData.title,
            description: characterData.description || "Description not found",
            path: characterData.thumbnail.path,
            extension: characterData.thumbnail.extension,
            total: data.data.total,
          };
        });
        setCharacterData(transformedData);
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
    fetchCharacter(input);
  }, [input, offset]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Events..."
        value={input}
        onChange={(event) => setInputHandler(event.target.value)}
      />
      <div className="container">
        {characterData.map((characterProps) => (
          <EventCard key={characterProps.id} characterProps={characterProps} />
        ))}
      </div>
      <br />
      <br />
      <EventPagination
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
      <Footer />
    </div>
  );
}

export default EventList;
