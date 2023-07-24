import axios from "axios";


export const fetchCharacters = async (lastChar) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/[${lastChar - 4}, ${
        lastChar - 3
      }, ${lastChar - 2}, ${lastChar - 1}, ${lastChar}]`
    );
    const results = response.data;
    if (results) {
      return results;
    }
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};

export const fetchRandomCharacter = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/`
      );
      const results = response.data;
      if (results) {
        return results;
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

export const fetchLocations = async (lastLocation) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location/[${lastLocation - 4}, ${
        lastLocation - 3
      }, ${lastLocation - 2}, ${lastLocation - 1}, ${lastLocation}]`
    );
    const results = response.data;
    if (results) {
      return results;
    }
  } catch (error) {
    console.error("Error fetching locations:", error);
  }
};

export const fetchRandomLocations = async () => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/location/`
      );
      const results = response.data;
      if (results) {
        return results;
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };
  