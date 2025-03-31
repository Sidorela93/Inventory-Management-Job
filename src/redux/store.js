import { configureStore } from "@reduxjs/toolkit";
import jobsiteReducer from "./jobsiteSlice";

const store = configureStore({
  reducer: {
    jobsites: jobsiteReducer,
  },
});

export default store;
