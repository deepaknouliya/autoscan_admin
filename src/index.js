import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import("./assets/style.css");
import("./assets/style-new.css");
import("./assets/ReactCrop.css");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </Provider>
);

serviceWorker.unregister();
