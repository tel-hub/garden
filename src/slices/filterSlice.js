import {createSlice} from "@reduxjs/toolkit";

export const sortOptions = ["by default", "price asc", "price desc", "name asc", "name desc"];

const initialState = {
  filter: {
    priceMin: 0,
    priceMax: Infinity,
    onlySales: false,
    sortBy: sortOptions[0]
  }
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterUpdate: (state, action) => {
      state.filter = {...action.payload};
    },
    filterClear: (state) => {
      state.filter = {...initialState};
    }
  }
});

// Action creators are generated for each case reducer function
export const {filterUpdate, filterClear} = filterSlice.actions;

export default filterSlice.reducer;
