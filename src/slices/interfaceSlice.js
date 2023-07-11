import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  burgerOpen: false,
  pageScrolled: false
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    menuUpdate: (state, action) => {
      state.burgerOpen = action.payload;
    },
    menuToggle: (state) => {
      state.burgerOpen = !state.burgerOpen;
    },
    pageScrolledToggle: (state, action) => {
      state.pageScrolled = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {menuUpdate, menuToggle, pageScrolledToggle} = interfaceSlice.actions;

export default interfaceSlice.reducer;
