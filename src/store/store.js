import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {createLogger} from "redux-logger/src";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import {apiSlice} from "../features/api/apiSlice";
import {interfaceSlice} from "../slices/interfaceSlice";
import {cartSlice} from "../slices/cartSlice";

const logger = createLogger({
  collapsed: true
});

const persistConfig = {
  key: "garden-root",
  storage
};

const reducers = combineReducers({
  api: apiSlice.reducer,
  interface: interfaceSlice.reducer,
  cart: cartSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
  //.concat(logger)
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
