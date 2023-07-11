import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {interfaceSlice} from "../slices/interfaceSlice";

const rootReducer = combineReducers({
  interface: interfaceSlice.reducer
});

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
});

