import * as React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Products } from "./containers/Products";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "../src/pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ViewCart from "./components/Cart/ViewCart.jsx";

function MainRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={ <ProductDetail /> } /> */}
      {/* <Route path="/" element={ <Products /> } /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrarse" element={<Register />} />
      <Route path="/viewCart" element={<ViewCart />} />
    </Routes>
  );
}

export default MainRoutes;
