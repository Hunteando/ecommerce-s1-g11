import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import axios from "axios";
import App from "./App";

// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
axios.defaults.baseURL = "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
