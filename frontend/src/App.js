import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

// COMPONENTES
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./components/Home/Home";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart.jsx";
import { Products } from "./containers/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Footer from "./components/Footer/Footer";
import BotonWapp from "./components/BotonWapp/BotonWapp";
import DashboardUsuario from "./components/Dashboard/DashboardUsuario/DashboardUsuario";
import DashboardAdmin from "./components/Dashboard/DashboardAdmin/DashboardAdmin";

function App() {
  const usuario = useSelector((e) => e.usuario);

  useEffect(() => {
    if (!usuario.username) {
      localStorage.removeItem("token");
    }
  }, []);

  return (
    <BrowserRouter>
      <AppBar usuario={usuario} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:id" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/detalle/:id" element={<ProductDetail />} />
        <Route
          path="/dashboard/admin"
          element={
            // usuario.idAdmins === true ? (
            <DashboardAdmin usuario={usuario} />
            // ) : (
            //   <Navigate to="/" replace={true} />
            // )
          }
        />
        <Route
          path="/dashboard/client"
          element={
            // usuario.username ? (
            <DashboardUsuario usuario={usuario} />
            // ) : (
            //   <Navigate to="/" replace={true} />
            // )
          }
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <Footer />
      <BotonWapp />
    </BrowserRouter>
  );
}

export default App;
