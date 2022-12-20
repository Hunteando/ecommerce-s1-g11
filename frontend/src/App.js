import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import MainRoutes from "./MainRoutes";
import "./App.scss";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ViewCart from "./components/Cart/ViewCart.jsx";
import { Products } from "./containers/Products";
import { useSelector } from "react-redux";

import AppBar from "./components/AppBar/AppBar";
import Footer from "./components/Footer/Footer";
import BotonWapp from "./components/BotonWapp/BotonWapp";

function App() {
  const usuario = useSelector((e) => e.usuario);

  useEffect(() => {
    if (!usuario.username) {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:id" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/carrito" element={<ViewCart />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/detalle/:id" element={<ProductDetail />} />
        {/* <Route exact path="/dashboard" element={ <Dashboard /> } /> */}
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <Footer />
      <BotonWapp />
    </BrowserRouter>
  );
}

export default App;
