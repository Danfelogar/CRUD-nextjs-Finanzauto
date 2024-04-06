import { combineReducers } from "@reduxjs/toolkit";

import auth from "./slices/auth";
import settingsSlice from "./slices/settings";
import userDataSlice from "./slices/userData";

export const rootReducer = combineReducers({
  auth,
  settingsSlice,
  userDataSlice,
});
