import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ILanguageState {
  language: string;
  languages: string[];
}
const initialState: ILanguageState = {
  language: "es",
  languages: ["es", "en"],
};
export const languageSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions;
export const getLanguage = (state: RootState) => state.language.language;
export default languageSlice.reducer;
