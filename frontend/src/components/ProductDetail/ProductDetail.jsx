import React, { useState } from "react";
import s from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const producto = useSelector((e) => e.detalleProducto);
  const usuario = useSelector((e) => e.usuario);
  const [pedido, setPedido] = useState({ cantidad: 1 });

  async function handleAgregarCarrito() {
    if (usuario.username) {
      await dispatch();
    } else {
      navigate(`/login/${params.id}`);
    }
  }

  return (
    <div className={s.contenedorDetalle}>
      <div className={s.contenedorIzquierdo}>
        <img
          className={s.imagenProducto}
          src={producto.imagen}
          alt="imagen producto"
        />
      </div>

      <div className={s.contenedorDerecho}>
        <div className={s.detalles}>
          <div className={s.nombreProducto}>{producto.nombre}</div>
          <div className={s.precioProducto}>
            $ {parseInt(producto.precio).toLocaleString("es")}
          </div>
          <div className={s.contenedorCantidad}>
            <div>Cantidad</div>
            <select
              className={s.selectCantidadProducto}
              name="cantidad"
              id="cantidad"
            >
              {new Array(producto.cantidad || 1).fill().map((i, idx) => {
                return (
                  <option key={idx} value={idx + 1}>{`${idx + 1} ${
                    idx === 0 ? "unidad" : "unidades"
                  }`}</option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={s.botones}>
          <div className={`${s.boton} ${s.botonComprar}`}>Comprar</div>
          <div
            onClick={handleAgregarCarrito}
            className={`${s.boton} ${s.botonAgregar}`}
          >
            Agregar al carrito
          </div>
        </div>
      </div>
    </div>
  );
}
