import React, { useState } from "react";
import CrearProducto from "./CrearProducto/CrearProducto";
import s from "./DashboardAdmin.module.css";
import PanelLateralAdmin from "./PanelLateralAdmin/PanelLateralAdmin";
import PanelUsuarios from "./PanelUsuarios/PanelUsuarios";
import ProductosCreados from "./ProductosCreados/ProductosCreados";
import Ventas from "./Ventas/Ventas";

function DashboardAdmin() {
  const [mostrarMenuAdmin, setMostrarMenuAdmin] = useState({
    crearProducto: false,
    productosCreados: false,
    ventas: false,
    usuarios: false,
  });

  function handleMostrarMenuAdmin(elMenu) {
    setMostrarMenuAdmin((ant) => {
      let res = {
        crearProducto: false,
        productosCreados: false,
        ventas: false,
        usuarios: false,
      };
      res[elMenu] = true;
      return res;
    });
  }

  return (
    <div className={s.contenedorDashboardAdmin}>
      <PanelLateralAdmin
        mostrarMenuAdmin={mostrarMenuAdmin}
        handleMostrarMenuAdmin={handleMostrarMenuAdmin}
      />

      {mostrarMenuAdmin.crearProducto && (
        <CrearProducto handleMostrarMenuAdmin={handleMostrarMenuAdmin} />
      )}
      {mostrarMenuAdmin.productosCreados && (
        <ProductosCreados handleMostrarMenuAdmin={handleMostrarMenuAdmin} />
      )}
      {mostrarMenuAdmin.ventas && (
        <Ventas handleMostrarMenuAdmin={handleMostrarMenuAdmin} />
      )}
      {mostrarMenuAdmin.usuarios && (
        <PanelUsuarios handleMostrarMenuAdmin={handleMostrarMenuAdmin} />
      )}
    </div>
  );
}

export default DashboardAdmin;
