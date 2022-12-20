import React from "react";
import s from "./MenuHeader.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";

export default function MenuHeader({
  mostrarMenu,
  setMostrarMenu,
  cerrarSesion,
  usuario,
}) {
  function handleCerrar(e) {
    e.target.id === "nav" ? setMostrarMenu(false) : null;
  }

  return (
    <nav
      id="nav"
      onClick={handleCerrar}
      className={`${s.contenedorMenuHeader} ${mostrarMenu ? s.activo : null}`}
    >
      <div className={s.menuHeader}>
        <div className={s.encabezadoMenu}>
          <Link
            to="/"
            className={s.tituloHeader}
            onClick={() => setMostrarMenu(false)}
          >
            Melinda Muriel
          </Link>
          <AiOutlineClose
            className={s.botonCerrarMenu}
            onClick={() => setMostrarMenu(false)}
          />
        </div>
        <div className={s.contenedorBuscar}>
          <BiSearchAlt className={s.imagenBuscador} />
          <input
            type="text"
            placeholder="Buscar"
            className={s.inputBuscarMenu}
          />
        </div>

        <Link
          to="/"
          onClick={() => setMostrarMenu(false)}
          className={s.itemsMenu}
        >
          Inicio
        </Link>
        <Link
          to="/tienda"
          onClick={() => setMostrarMenu(false)}
          className={s.itemsMenu}
        >
          Tienda
        </Link>
        <Link
          to="/carrito"
          onClick={() => setMostrarMenu(false)}
          className={s.itemsMenu}
        >
          Terminar Compra
        </Link>
        <Link
          to="/sobreMi"
          onClick={() => setMostrarMenu(false)}
          className={s.itemsMenu}
        >
          Sobre mi obra
        </Link>
        <Link
          to="/FAQ"
          onClick={() => setMostrarMenu(false)}
          className={s.itemsMenu}
        >
          FAQ
        </Link>
        <Link
          to="/politicas"
          onClick={() => setMostrarMenu(false)}
          className={s.itemsMenu}
        >
          Política de Privacidad
        </Link>
        <Link
          to="/contacto"
          onClick={() => setMostrarMenu(false)}
          className={s.itemsMenu}
        >
          Contáctame
        </Link>

        <div className={s.itemsUsuarioMenu}>
          <div className={s.renglonMiCuenta}>
            <AiOutlineUser className={s.miCuentaIcono} />
            {usuario.username ? (
              <Link to="/dashboard" className={`${s.itemsMenu}`}>
                Mi cuenta
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setMostrarMenu(false)}
                className={`${s.itemsMenu}`}
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
          {usuario.username ? (
            <div className={s.renglonCerrarSesion}>
              <AiOutlineLogout className={s.cerrarSesionIcono} />
              <div
                onClick={() => {
                  cerrarSesion();
                  setMostrarMenu(false);
                }}
                className={`${s.itemsMenu} ${s.cerrarSesionTexto}`}
              >
                Cerrar sesión
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
