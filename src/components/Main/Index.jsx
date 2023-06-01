import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Index.css";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchCharacters();
    fetchLocations();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(await response.data.results.slice(0, 5));
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );
      setLocations(await response.data.results.slice(0, 5));
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  return (
    <div className="main-container">
      <h2>Characters</h2>
      <div className="characters-container">
        {characters.map((character) => (
          <div className="character-item" key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
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
