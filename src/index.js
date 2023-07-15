import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {persistor, store} from "./store/store";
import {DialogProvider} from "react-dialog-confirm";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <DialogProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </DialogProvider>
    </PersistGate>
  </Provider>
);
