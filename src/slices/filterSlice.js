import {createSlice} from "@reduxjs/toolkit";

export const filterOptions = ["by default", "price up", "price down", "name up", "name down"];

const initialState = {
  filter: {
    priceMin: 0,
    priceMax: Infinity,
    onlySales: false,
    filterBy: filterOptions[0]
  }
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterUpdate: (state, action) => {
      state.filter = {...state, action};
    },
    filterClear: (state) => {
      state.filter = {...initialState};
    }
  }
});

// Action creators are generated for each case reducer function
export const {filterUpdate, filterClear} = filterSlice.actions;

export default filterSlice.reducer;
