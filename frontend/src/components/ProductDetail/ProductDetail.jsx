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
  const [imagenSeleccionada, setImagenSeleccionada] = useState(
    producto.imagen[0]
  );
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

  async function handleAgregarCarrito() {
    if (usuario.username) {
      await dispatch();
    } else {
      navigate(`/login/${params.id}`);
    }
  }

  function handleSeleccionarImagen(foto) {
    setImagenSeleccionada(foto);
  }

  function handleCantidadSeleccionada(e) {
    console.log(e.target.value);
    setCantidadSeleccionada(e.target.value);
  }

  return (
    <div className={s.contenedorDetalle}>
      <div className={`${s.nombreProducto} ${s.nombreProductoCel}`}>
        {producto.nombre}
      </div>

      <div className={s.contenedorIzquierdo}>
        <img
          className={s.imagenProducto}
          src={imagenSeleccionada}
          alt="imagen producto"
        />
        <div className={s.contenedorImagenesMiniaturaProducto}>
          {producto.imagen.map((i) => {
            return (
              <img
                onClick={() => handleSeleccionarImagen(i)}
                className={s.imagenMiniaturaProducto}
                src={i}
                alt="imagen producto"
              />
            );
          })}
        </div>
      </div>

      <div className={s.contenedorDerecho}>
        <div className={s.detalles}>
          <div className={s.nombreProducto}>{producto.nombre}</div>
          <div className={s.precioProducto}>
            ${" "}
            {parseInt(producto.precio * cantidadSeleccionada).toLocaleString(
              "es"
            )}
          </div>
          <div className={s.contenedorCantidad}>
            <div>Cantidad</div>
            <select
              onChange={handleCantidadSeleccionada}
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
