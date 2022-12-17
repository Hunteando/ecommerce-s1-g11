import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { BrowserRouter } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";
import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
axios.defaults.baseURL = "http://localhost:3001"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppBar />
        <App />
        <Footer />
      </BrowserRouter> 
    </Provider>
  </React.StrictMode>
);
