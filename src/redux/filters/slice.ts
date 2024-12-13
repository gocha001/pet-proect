import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter } from "../../components/App/App.types";


const initialState: Filter = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;

export const { changeFilter } = slice.actions;
