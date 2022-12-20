import React from "react";
import s from "./AppBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesion } from "../../redux/actions/actionsLogin";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function AppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usuario = useSelector((e) => e.usuario);

  function handleCerrarSesion() {
    try {
      dispatch(cerrarSesion);
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
      <Link to="/" className={s.tituloHeader}>
        Melinda Muriel
      </Link>

      <div className={s.contenedorDerecha}>
        <div className={s.contenedorBuscar}>
          <BiSearchAlt className={s.imagenBuscador} />
          <input type="text" placeholder="Buscar" className={s.input} />
        </div>

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
        </div>
      </div>
    </div>
  );
}
