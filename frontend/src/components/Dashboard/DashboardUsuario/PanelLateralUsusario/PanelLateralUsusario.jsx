import React from "react";
import s from "./PanelLateralUsusario.module.css";

function PanelLateralUsusario({ mostrarMenu, setMostrarMenu }) {
  function handleSeleccionarMenu(elMenu) {
    setMostrarMenu((ant) => {
      let res = {
        perfil: false,
        compras: false,
      };
      res[elMenu] = true;
      return res;
    });
  }

  return (
    <div className={s.contenedorPanelLateralUsuario}>
      <div
        onClick={() => handleSeleccionarMenu("perfil")}
        className={`${s.itemPanelLateralUsuarios} ${
          mostrarMenu.perfil && s.itemPanelLateralUsuarioSeleccionado
        }`}
      >
        Perfil
      </div>
      <div
        onClick={() => handleSeleccionarMenu("compras")}
        className={`${s.itemPanelLateralUsuarios} ${
          mostrarMenu.compras && s.itemPanelLateralUsuarioSeleccionado
        }`}
      >
        Compras
      </div>
      <div
        onClick={() => handleSeleccionarMenu("direcciones")}
        className={`${s.itemPanelLateralUsuarios} ${
          mostrarMenu.direcciones && s.itemPanelLateralUsuarioSeleccionado
        }`}
      >
        Direcciones
      </div>
    </div>
  );
}

export default PanelLateralUsusario;
