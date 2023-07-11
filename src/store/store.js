import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {createLogger} from "redux-logger/src";
import {apiSlice} from "../features/api/apiSlice";
import {interfaceSlice} from "../slices/interfaceSlice";
import {cartSlice} from "../slices/cartSlice";

const logger = createLogger({
  collapsed: true
});

const reducers = combineReducers({
  api: apiSlice.reducer,
  interface: interfaceSlice.reducer,
  cart: cartSlice.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
      //.concat(logger)
});

setupListeners(store.dispatch);
