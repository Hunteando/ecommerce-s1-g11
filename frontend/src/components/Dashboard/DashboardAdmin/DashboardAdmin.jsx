import React, { useState } from "react";
import CrearProducto from "./CrearProducto/CrearProducto";
import s from "./DashboardAdmin.module.css";
import PanelLateralAdmin from "./PanelLateralAdmin/PanelLateralAdmin";
import ProductosCreados from "./ProductosCreados/ProductosCreados";

function DashboardAdmin() {
  const [mostrarMenuAdmin, setMostrarMenuAdmin] = useState({
    crearProducto: false,
    productosCreados: false,
  });

  function handleMostrarMenuAdmin(elMenu) {
    setMostrarMenuAdmin((ant) => {
      let res = {
        crearProducto: false,
        productosCreados: false,
      };
      res[elMenu] = true;
      return res;
    });
  }

  return (
    <div className={s.contenedorDashboardAdmin}>
      <PanelLateralAdmin handleMostrarMenuAdmin={handleMostrarMenuAdmin} />

      {mostrarMenuAdmin.crearProducto && (
        <CrearProducto handleMostrarMenuAdmin={handleMostrarMenuAdmin} />
      )}
      {mostrarMenuAdmin.productosCreados && (
        <ProductosCreados handleMostrarMenuAdmin={handleMostrarMenuAdmin} />
      )}
    </div>
  );
}

export default DashboardAdmin;
