import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cartFlyOffset: {top: 0, left: 0, width: 0, height: 0, radius: 0, bg: "#393"},
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
    setCartFlyOffset: (state, action) => {
      state.cartFlyOffset = action.payload;
    },
    pageScrolledToggle: (state, action) => {
      state.pageScrolled = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {menuUpdate, menuToggle, pageScrolledToggle, setCartFlyOffset} = interfaceSlice.actions;

export default interfaceSlice.reducer;
