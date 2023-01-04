import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Counter from "./Counter/Counter";

import s from "./Cart.module.css";
import { MdDelete } from "react-icons/md";
import imgCarroVacio from "../../assets/images/vacio.jpg";

import Swal from "sweetalert2";

import {
  eliminarProductoCarrito,
  vaciarCarrito,
} from "../../redux/actions/actionsProductos";

export default function Cart() {
  const dispatch = useDispatch();

  const usuario = useSelector((e) => e.usuario);
  const productos = useSelector((e) => e.carro);

  // const [cart, setCart] = useState(productos);
  const [total, setTotal] = useState(0);

  async function handleVaciarCarrito() {
    Swal.fire({
      icon: "question",
      title: "Seguro desea eliminar todo del carrito?",
      showDenyButton: true,
      denyButtonText: "Volver",
    }).then(({ isConfirmed }) => {
      if (isConfirmed) dispatch(vaciarCarrito(usuario.id));
    });
  }

  function handleEliminarProducto(e) {
    Swal.fire({
      icon: "question",
      title: "Seguro desea eliminar el producto?",
      showDenyButton: true,
      denyButtonText: "Volver",
    }).then(({ isConfirmed }) => {
      if (isConfirmed) dispatch(eliminarProductoCarrito(e));
    });
  }

  useEffect(() => {
    let result = 0;
    for (const carro of productos) {
      let final = carro.cantidad * carro.precio;
      result += final;
    }
    setTotal(result);
  }, [productos]);

  console.log(productos);

  return productos?.length === 0 ? (
    <div className={s.contenedorCarroVacio}>
      <div className={s.carroVacio}>
        <div className={s.tituloCarro}>Carro vacio</div>
        <img src={imgCarroVacio} alt="carroVacio" className={s.imgCarroVacio} />
        <Link to="/" className={s.contenedorBoton}>
          <div className={s.boton}>Volver a comprar</div>
        </Link>
      </div>
    </div>
  ) : (
    <div className={s.contenedorCarro}>
      <h2 className={s.tituloCarro}>Mi carrito</h2>
      <div className={s.contenedorPanel}>
        <div className={s.contenedorProductos}>
          {productos?.map((item) => {
            return (
              <div key={item.id} className={s.tarjetaProductos}>
                <div className={s.contenedorImagenTarjeta}>
                  <img
                    src={item.imagen}
                    alt="img"
                    className={s.imagenTarjeta}
                  />
                </div>

                <div className={s.contenedorInformacionTarjeta}>
                  <h3>Precio: ${item.precio}</h3>
                  <p sx={{ fontFamily: "comspotExI", marginBottom: "2rem" }}>
                    {item.info}
                  </p>
                  <Counter
                    cantidadInicial={item.cantidad}
                    cantidadDisponible={item.disponible}
                    idProducto={item.id}
                    handleEliminarProducto={() =>
                      handleEliminarProducto(item.id)
                    }
                  />
                </div>
                <MdDelete
                  className={s.botonEliminarTarjeta}
                  onClick={() => handleEliminarProducto(item.id)}
                />
              </div>
            );
          })}
        </div>

        <div className={s.contenedorTotales}>
          <h2>precios totales</h2>
          <h3>Productos en total: {productos?.length}</h3>
          <h3>
            Envio: <span>FREE</span>
          </h3>
          <h2 className={s.texto_total}>Total : $ {total}</h2>
          <div className={s.contenedorBotonCheckout}>CheckOut</div>
        </div>
      </div>
      <div className={s.links}>
        <Link to="/" className={s.contenedorBoton}>
          <div className={s.boton}>Volver a comprar</div>
        </Link>

        <div
          className={`${s.contenedorBoton} ${s.botonVaciarCarrito}`}
          onClick={handleVaciarCarrito}
        >
          <div className={s.boton}>Vaciar carrito</div>
        </div>
      </div>
    </div>
  );
}
