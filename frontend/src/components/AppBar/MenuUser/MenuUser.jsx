import React from "react";
import s from "./MenuUser.module.css";
import { Link } from "react-router-dom";

function MenuUser({ setMostrarMiCuenta, usuario, handleCerrarSesion }) {
  function handleFondoMenuUser(e) {
    e.target.id === "fondoMenuUser" ? setMostrarMiCuenta(false) : null;
  }

  return (
    <div
      id="fondoMenuUser"
      onClick={handleFondoMenuUser}
      className={s.contenedorGralMenuUser}
    >
      <div className={s.contenedorMenuUser}>
        <div className={s.tituloMenuUser}>
          {usuario?.username ? usuario.username : "El Fantasma"}
        </div>
        {usuario.isAdmin === true ? null : (
          <Link
            to="/panel/usuario"
            onClick={() => setMostrarMiCuenta(false)}
            className={s.itemMenuUser}
          >
            Mi Perfil
          </Link>
        )}

        {usuario.isAdmin === true ? (
          <Link to="/panel/administrador" className={s.itemMenuUser}>
            Panel administrador
          </Link>
        ) : null}
        <div
          className={s.itemMenuUser}
          onClick={() => {
            handleCerrarSesion();
            setMostrarMiCuenta(false);
          }}
        >
          Cerrar sesión
        </div>
      </div>
    </div>
  );
}

export default MenuUser;
