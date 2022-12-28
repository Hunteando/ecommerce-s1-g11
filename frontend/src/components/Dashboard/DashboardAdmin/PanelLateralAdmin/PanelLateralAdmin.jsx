import React from "react";
import s from "./PanelLateralAdmin.module.css";

function PanelLateralAdmin({ handleMostrarMenuAdmin }) {
  return (
    <div className={s.contenedorPanelLateralAdmin}>
      <div
        onClick={() => handleMostrarMenuAdmin("crearProducto")}
        className={s.itemPanelLateralAdmin}
      >
        Crear Producto
      </div>
      <div
        onClick={() => handleMostrarMenuAdmin("productosCreados")}
        className={s.itemPanelLateralAdmin}
      >
        Productos creados
      </div>
    </div>
  );
}

export default PanelLateralAdmin;
