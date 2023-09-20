import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type OptionsType = {
  value: string;
  label: string;
};
export interface IFiltersState {
  selectedValue: string;
  options: OptionsType[];
}
const initialState: IFiltersState = {
  selectedValue: "1",
  options: [
    { value: "1", label: "hola" },
    { value: "2", label: "chao" },
  ],
};
export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    update: (state, action) => {
      state.selectedValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = filtersSlice.actions;
export const selectValue = (state: RootState) => state.filters.selectedValue;
export default filtersSlice.reducer;
