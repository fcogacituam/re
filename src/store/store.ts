import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./slice";
import languageSlice from "./languageSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    language: languageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
