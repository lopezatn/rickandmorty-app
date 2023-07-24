import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Index.css";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchCharacters();
    fetchLocations();
  }, [pageNumber]);

  const charAmount = 5;
  const lastChar = charAmount * pageNumber;

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/[${lastChar - 4}, ${lastChar - 3}, ${lastChar - 2}, ${lastChar - 1}, ${lastChar}]`
      );
      const results = response.data;
      if (results) {
        setCharacters(results);
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const locationAmount = 5;
  const lastLocation = locationAmount * pageNumber;
  

  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/[${lastLocation - 4}, ${lastLocation - 3}, ${lastLocation -2}, ${lastLocation - 1}, ${lastLocation}]`
      );
      const results = response.data;
      if (results) {
        setLocations(results);
        const locationsLength = results.length;
        console.log(locationsLength);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleNextPage = () => {
    setPageNumber((prevNumber) => prevNumber + 1);
  };

  const handlePrevPage = () => {
    setPageNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className="main-container">
      <h2>Characters</h2>
      <div className="characters-container">
        <button disabled={pageNumber === 1} onClick={handlePrevPage}>
          prev
        </button>
        {characters.map((character) => (
          <div className="character-item" key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
        <button onClick={handleNextPage}>next</button>
      </div>
      <h2>Locations</h2>
      <div className="locations-container">
        {locations.map((location) => (
          <div className="location-item" key={location.id}>
            <h3>{location.name}</h3>
            <p>{location.type}</p>
            <p>{location.dimension}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
