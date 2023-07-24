import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: null,
  reducers: {
    loadCharacter: (state, action) => {
      return action.payload;
    },
  },
});

export const { loadCharacter } = characterSlice.actions;

export default characterSlice.reducer;
