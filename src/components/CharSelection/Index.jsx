import React, { useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUserCharacter } from "../../database/lowdb";
import { loadCharacter } from "../../redux/characterSlice";

const CharSelection = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [randomCharacterLocation, setRandomCharacterLocation] = useState(null);
  const [buttonClicks, setButtonClicks] = useState(0);

  const user = useSelector((state) => state.user);
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const handleClick = () => {
    const min = 1;
    const max = 826;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    setButtonClicks(prevButtonClicks => prevButtonClicks + 1);
    fetchRandomCharacter(randomNumber);
  };

  const handleAccept = () => {
    addUserCharacter(user.id, randomCharacter.id);
    dispatch(loadCharacter(randomCharacter));
  };

  const fetchRandomCharacter = async (id) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const result = response.data;
      if (result) {
        setRandomCharacter(result);
        fetchCharacterLocation(result.location.url)
      }
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  const fetchCharacterLocation = async (url) => {
    try {
      const response = await axios.get(url);
      const result = response.data;
      if (result) {
        setRandomCharacterLocation(result);
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <>
      {!character ? 
        <div className="char-selection-container">
          <h2>Character Selection</h2>
          <p>roll the dice for a character selection.</p>
          <br />
          <img className="char-image" src={randomCharacter?.image} alt={randomCharacter?.name} />
          <p>{randomCharacter?.name}</p>
          <p>{randomCharacterLocation?.name}</p>
          <button disabled={buttonClicks === 3} onClick={handleClick}>Roll Dice</button>
          <button onClick={handleAccept}>Accept character</button>
        </div>
        :
        <div className="char-selection-container">
          <img className="char-image" src={character.image} alt={character.name} />
          <p>Your character is {character.name}</p>
          <p>Location is {character.location.name}</p>
        </div>
      }   
    </>
  );
};

export default CharSelection;