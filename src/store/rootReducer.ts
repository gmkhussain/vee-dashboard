import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import jobsSlice from "./features/jobsSlice"

export default combineReducers({
  user: userSlice,
  jobs: jobsSlice
});
