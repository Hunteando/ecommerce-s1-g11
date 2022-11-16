import * as React from 'react';
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';


const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppBar/>
      <App />
     <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
