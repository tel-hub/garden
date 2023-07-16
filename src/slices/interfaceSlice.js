import {createSlice} from "@reduxjs/toolkit";

const defaultFlyOptions = {top: 0, left: 0, width: 0, height: 0, radius: 0, bg: "#393"};

const initialState = {
  cartFlyOptions: defaultFlyOptions,
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
    setCartFlyOptions: (state, action) => {
      state.cartFlyOptions = action.payload;
    },
    resetCartFlyOptions: (state) => {
      state.cartFlyOptions = defaultFlyOptions;
    },
    pageScrolledToggle: (state, action) => {
      state.pageScrolled = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  menuUpdate,
  menuToggle,
  pageScrolledToggle,
  setCartFlyOptions,
  resetCartFlyOptions
} = interfaceSlice.actions;

export default interfaceSlice.reducer;
