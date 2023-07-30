import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Index.css";
import { fetchAllCharacters, fetchLocations, fetchCharacters } from "../../services/rickAndMortyAPIClient";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const charAmount = 5;
  const lastChar = charAmount * pageNumber;
  const lastPage = Math.ceil(allCharacters?.info?.count / 5);
  const locationAmount = 5;
  const lastLocation = locationAmount * pageNumber;

  console.log(lastPage);

  useEffect(() => {
    loadCharacters();
    loadLocations();
    loadAllCharacters();
  }, [pageNumber]);


  const loadAllCharacters = async () => {
    const allCharactersArr = await fetchAllCharacters();
    setAllCharacters(allCharactersArr);
  }

  const loadCharacters = async () => {
    const charactersArr = await fetchCharacters(lastChar);
    setCharacters(charactersArr);
  }

  const loadLocations = async () => {
    const locationsArr = await fetchLocations(lastLocation);
    setLocations(locationsArr);
  }

  const handleNextPage = () => {
    setPageNumber((prevNumber) => prevNumber + 1);
  };

  const handlePrevPage = () => {
    setPageNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div className="main-container">
      <h2>Characters</h2>
      <div className="body-container">
        <div className="prev-button">
          <button
            className="carousel-button"
            disabled={pageNumber === 1}
            onClick={handlePrevPage}
          >
            prev
          </button>
        </div>
        <div className="character-location-container">
          <div className="characters-container">
            {characters.map((character) => (
              <div className="character-item" key={character.id}>
                <h3 className="character-name">{character.name}</h3>
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
        <div className="next-button">
          <button className="carousel-button" disabled={pageNumber === lastPage} onClick={handleNextPage}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;