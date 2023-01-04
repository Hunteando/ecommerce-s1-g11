import React from "react";
import { useDispatch } from "react-redux";
import { modificarCantidadProductoCarrito } from "../../../redux/actions/actionsProductos";
import s from "./Counter.module.css";

export default function Counter({
  cantidadInicial,
  cantidadDisponible,
  idProducto,
}) {
  const dispatch = useDispatch();

  async function handlerSumar() {
    if (cantidadInicial < cantidadDisponible) {
      await dispatch(
        modificarCantidadProductoCarrito({
          idProducto,
          cantidad: cantidadInicial + 1,
        })
      );
    } else {
      alert(`Disculpa... Hay ${cantidadDisponible} unidades disponibles`);
    }
  }

  async function handlerRestar() {
    if (cantidadInicial > 1) {
      await dispatch(
        modificarCantidadProductoCarrito({
          idProducto,
          cantidad: cantidadInicial - 1,
        })
      );
    } else {
      alert(`Minimo 1 unidad`);
    }
  }

  return (
    <div className={s.contenedorContador}>
      <div
        className={`${s.contenedorBotonContador} ${
          cantidadInicial >= cantidadDisponible ? s.botonDesabilitado : null
        }`}
        onClick={handlerSumar}
      >
        <div>+</div>
      </div>
      <div className={s.contenedorCantidad}>
        <p>{cantidadInicial}</p>
      </div>
      <div
        className={`${s.contenedorBotonContador} ${
          cantidadInicial <= 1 ? s.botonDesabilitado : null
        }`}
        onClick={handlerRestar}
      >
        <div>-</div>
      </div>
    </div>
  );
}
