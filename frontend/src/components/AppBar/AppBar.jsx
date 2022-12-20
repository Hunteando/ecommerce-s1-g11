import React, { useState } from "react";
import s from "./AppBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesion } from "../../redux/actions/actionsLogin";
import { BiSearchAlt } from "react-icons/bi";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import MenuHeader from "./MenuHeader/MenuHeader";

export default function AppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usuario = useSelector((e) => e.usuario);

  const [mostrarMenuHeader, setMostrarMenuHeader] = useState(false);

  async function handleCerrarSesion() {
    try {
      await dispatch(cerrarSesion);
      alert("Sesión cerrada correctamente");
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem("token");
  }
  function handleIniciarSesion() {
    navigate("/login");
  }

  function handlerCarrito() {
    navigate("/carrito");
  }

  return (
    <div className={s.contenedorHeader}>
      <AiOutlineMenu
        className={s.botonMenuHeader}
        onClick={() => setMostrarMenuHeader(!mostrarMenuHeader)}
      />

      <MenuHeader
        mostrarMenu={mostrarMenuHeader}
        setMostrarMenu={setMostrarMenuHeader}
        cerrarSesion={handleCerrarSesion}
        usuario={usuario}
      />

      <Link to="/" className={s.tituloHeader}>
        Melinda Muriel
      </Link>

      <div className={s.contenedorDerecha}>
        <div className={s.contenedorBuscar}>
          <BiSearchAlt className={s.imagenBuscador} />
          <input
            type="text"
            placeholder="Buscar"
            className={s.inputBuscarHeader}
          />
        </div>
        <BiSearchAlt
          className={s.imagenBuscadorTablet}
          onClick={() => setMostrarMenuHeader(true)}
        />

        <select className={s.selectHeader}>
          <option>Español (Latinoaméricano)</option>
          <option>English (U.S)</option>
          <option>Portugues (Europa)</option>
        </select>

        <AiOutlineShoppingCart
          onClick={handlerCarrito}
          className={s.carritoHeader}
        />

        <div className={s.contenedorBotonHeader}>
          {usuario.username ? (
            <div onClick={handleCerrarSesion} className={s.botonHeader}>
              Cerrar sesión
            </div>
          ) : (
            <div onClick={handleIniciarSesion} className={s.botonHeader}>
              Iniciar sesión
            </div>
          )}
          <AiOutlineUser
            className={s.iconoUsuarioTablet}
            onClick={
              usuario.username ? handleCerrarSesion : handleIniciarSesion
            }
          />
        </div>
      </div>
    </div>
  );
}
