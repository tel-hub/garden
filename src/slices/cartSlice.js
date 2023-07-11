import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  products: []
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartUpdate: (state, action) => {
      state.products = action.payload;
    },
    cartClear: (state) => {
      state.products = [];
    }
  }
});

// Action creators are generated for each case reducer function
export const {cartUpdate} = cartSlice.actions;

export default cartSlice.reducer;
