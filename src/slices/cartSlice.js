import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  products: []
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      const product = action.payload;

      const index = state.products.findIndex(p => p.id === product.id);

      if (index === -1) {
        state.products.push(product);
      } else {
        state.products[index].count += 1;
      }

    },
    cartRemoveItem: (state, action) => {
      state.products = action.payload;
    },
    cartClear: (state) => {
      state.products = [];
    }
  }
});

// Action creators are generated for each case reducer function
export const {cartAddItem, cartRemoveItem, cartClear} = cartSlice.actions;

export default cartSlice.reducer;
