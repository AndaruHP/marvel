import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import CharacterList from "./Components/Character/CharacterList";
import ComicList from "./Components/Comic/ComicList";
import EventList from "./Components/Event/EventList";
import SeriesList from "./Components/Series/SeriesList";
import AboutUs from "./src-aboutus/App";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/comics" element={<ComicList />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/series" element={<SeriesList />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

function Navbar() {
  const location = useLocation();
  const showNavbar = !(location.pathname === "/");

  return (
    <nav style={{ display: showNavbar ? "block" : "none" }}>
      <div className="Navbar">
        <ul>
          <Link to="/">
            <h1>Marvel Wiki</h1>
          </Link>
          <li>
            <Link to="/characters">Character</Link>
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
      </div>
    </nav>
  );
}

export default App;
