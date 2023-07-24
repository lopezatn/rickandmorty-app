import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import characterReducer from "./characterSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    character: characterReducer,
  },
});