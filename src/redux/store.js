import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "./slice/habitSlice";

const store = configureStore({
  reducer: {
    habitTacker: habitSlice,
  },
});

export default store;
