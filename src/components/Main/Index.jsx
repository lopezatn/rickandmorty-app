import React, { useState, useEffect } from "react";
import "./Index.css";
import { fetchLocations, fetchCharacters, fetchCharactersAmount } from "../../services/rickAndMortyAPIClient";


const CHARACTERS_PER_PAGE = 5;

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersAmount, setCharactersAmount] = useState(0);
  const [locations, setLocations] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const lastChar = CHARACTERS_PER_PAGE * pageNumber;
  const lastPage = Math.ceil(charactersAmount / CHARACTERS_PER_PAGE);
  const locationAmount = CHARACTERS_PER_PAGE;
  const lastLocation = locationAmount * pageNumber;

  useEffect(() => {
    loadCharactersData();
  }, [pageNumber]);

  const loadCharactersData = async () => {
    const amount = await fetchCharactersAmount();
    const charactersArr = await fetchCharacters(lastChar);
    const locationsArr = await fetchLocations(lastLocation);
    setCharactersAmount(amount);
    setCharacters(charactersArr);
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