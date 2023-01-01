import React, { useState } from "react";
import s from "./PanelLateralAdmin.module.css";

function PanelLateralAdmin({ handleMostrarMenuAdmin }) {
  const [menuElegido, setMenuElegido] = useState("");

  return (
    <div className={s.contenedorPanelLateralAdmin}>
      <div
        onClick={() => {
          handleMostrarMenuAdmin("crearProducto");
          setMenuElegido("crearProducto");
        }}
        className={`${s.itemPanelLateralAdmin} ${
          menuElegido === "crearProducto" && s.itemPanelLateralAdminSeleccionado
        }`}
      >
        Crear Producto
      </div>
      <div
        onClick={() => {
          handleMostrarMenuAdmin("productosCreados");
          setMenuElegido("productosCreados");
        }}
        className={`${s.itemPanelLateralAdmin} ${
          menuElegido === "productosCreados" &&
          s.itemPanelLateralAdminSeleccionado
        }`}
      >
        Productos creados
      </div>
      <div
        onClick={() => {
          handleMostrarMenuAdmin("ventas");
          setMenuElegido("ventas");
        }}
        className={`${s.itemPanelLateralAdmin} ${
          menuElegido === "ventas" && s.itemPanelLateralAdminSeleccionado
        }`}
      >
        Ventas
      </div>
      <div
        onClick={() => {
          handleMostrarMenuAdmin("usuarios");
          setMenuElegido("usuarios");
        }}
        className={`${s.itemPanelLateralAdmin} ${
          menuElegido === "usuarios" && s.itemPanelLateralAdminSeleccionado
        }`}
      >
        Usuarios
      </div>
    </div>
  );
}

export default PanelLateralAdmin;
