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
import MenuUser from "./MenuUser/MenuUser";
import Swal from "sweetalert2";

export default function AppBar({ usuario }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mostrarMenuHeader, setMostrarMenuHeader] = useState(false);
  const [mostrarMiCuenta, setMostrarMiCuenta] = useState(false);

  async function handleCerrarSesion() {
    try {
      Swal.fire({
        icon: "question",
        title: "Seguro desea cerrar sesión?",
        confirmButtonText: "Cerrar",
        showDenyButton: true,
        denyButtonText: "Cancelar",
      }).then(({ isConfirmed }) => {
        console.log(isConfirmed);
        if (isConfirmed) {
          console.log("cerrando");
          dispatch(cerrarSesion()).then(
            Swal.fire({
              icon: "success",
              title: "Sesión cerrada correctamente!",
              text: "Te esperamos de nuevo!",
            })
          );
          localStorage.removeItem("token");
          navigate("/");
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al cerrar sesión!",
        text: "Vuelve a intentarlo!",
      });
    }
  }

  function handleIniciarSesion() {
    navigate("/login");
  }

  function handlerCarrito() {
    navigate("/carrito");
  }

  return (
    <div className={s.contenedorHeader}>
      <div className={s.overflowContenedorHeader}>
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

          <div
            onClick={
              usuario.username
                ? () => setMostrarMiCuenta(!mostrarMiCuenta)
                : handleIniciarSesion
            }
            className={s.contenedorBotonHeader}
          >
            <div className={s.botonHeader}>
              {usuario.username ? "Mi cuenta" : "Iniciar sesión"}
            </div>
            <AiOutlineUser className={s.iconoUsuarioTablet} />
          </div>
        </div>

        {/* <MenuUser
          setMostrarMiCuenta={setMostrarMiCuenta}
          usuario={usuario}
          handleCerrarSesion={handleCerrarSesion}
        /> */}

        {mostrarMiCuenta && (
          <MenuUser
            setMostrarMiCuenta={setMostrarMiCuenta}
            usuario={usuario}
            handleCerrarSesion={handleCerrarSesion}
          />
        )}
      </div>
    </div>
  );
}
