import React from "react";
import s from "./PanelLateralAdmin.module.css";

function PanelLateralAdmin({ handleMostrarMenuAdmin, mostrarMenuAdmin }) {
  return (
    <div className={s.contenedorPanelLateralAdmin}>
      <div
        onClick={() => {
          handleMostrarMenuAdmin("crearProducto");
        }}
        className={`${s.itemPanelLateralAdmin} ${
          mostrarMenuAdmin.crearProducto && s.itemPanelLateralAdminSeleccionado
        }`}
      >
        Crear Producto
      </div>
      <div
        onClick={() => {
          handleMostrarMenuAdmin("productosCreados");
        }}
        className={`${s.itemPanelLateralAdmin} ${
          mostrarMenuAdmin.productosCreados &&
          s.itemPanelLateralAdminSeleccionado
        }`}
      >
        Productos creados
      </div>
      <div
        onClick={() => {
          handleMostrarMenuAdmin("ventas");
        }}
        className={`${s.itemPanelLateralAdmin} ${
          mostrarMenuAdmin.ventas && s.itemPanelLateralAdminSeleccionado
        }`}
      >
        Ventas
      </div>
      <div
        onClick={() => {
          handleMostrarMenuAdmin("usuarios");
        }}
        className={`${s.itemPanelLateralAdmin} ${
          mostrarMenuAdmin.usuarios && s.itemPanelLateralAdminSeleccionado
        }`}
      >
        Usuarios
      </div>
    </div>
  );
}

export default PanelLateralAdmin;
