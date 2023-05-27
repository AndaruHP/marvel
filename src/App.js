import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CharacterList from "./Components/Character/CharacterList";
import ComicList from "./Components/Comic/ComicList";
import EventList from "./Components/Event/EventList";
import SeriesList from "./Components/Series/SeriesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
          <h1>Marvel Wiki</h1>
            <li>
              <Link to="/">Character</Link>
            </li>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/comics" element={<ComicList />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/series" element={<SeriesList />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
