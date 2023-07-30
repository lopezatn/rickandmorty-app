import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: null,
  reducers: {
    loadCharacters: (state, action) => {
      return action.payload;
    },
  },
});

export const { loadCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
