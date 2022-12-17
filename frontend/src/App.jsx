import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import MainRoutes from "./MainRoutes";
import "./App.scss";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./pages/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ViewCart from "./components/Cart/ViewCart.jsx";
import { Products } from "./containers/Products";
import { useSelector } from "react-redux";

function App() {
  const usuario = useSelector((e) => e.usuario);

  useEffect(() => {
    if (!usuario.username) {
      localStorage.removeItem("token");
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrarse" element={<Register />} />
      <Route path="/viewCart" element={<ViewCart />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      {/* <Route path="/" element={ <ProductDetail /> } /> */}
      {/* <Route path="/" element={ <Products /> } /> */}
      {/* <Route exact path="/dashboard" element={ <Dashboard /> } /> */}
    </Routes>
  );
}

export default App;
