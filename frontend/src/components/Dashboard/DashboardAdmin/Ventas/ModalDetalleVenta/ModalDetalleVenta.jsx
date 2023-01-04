import React, { useEffect } from "react";
import s from "./ModalDetalleVenta.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlineLogout } from "react-icons/ai";

function ModalDetalleVenta({ idVenta, setMostrarDetalleVenta, setIdVenta }) {
  const detalleVenta = useSelector((e) => e.detalleVenta);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      try {
        //await dispatch(obtenerDetallesVenta(idVenta)) // ACTION para recibir los detalles de la venta
      } catch (e) {
        alert("No se pudieron obtener los detalles de la venta");
      }
    }
    fetch();
  }, []);

  return (
    <div className={s.contenedorDetalleVenta}>
      <div className={s.contenedorIntermedioDetalleVenta}>
        <div className={s.tituloDetalleVenta}>
          Detalle de la venta {idVenta}
        </div>
        <table className={s.tablaDetalleVenta}>
          <thead className={s.encabezadoDetalleVenta}>
            <th>Id venta</th>
            <th>Id usuario</th>
            <th>mailUser</th>
            <th>Fecha venta</th>
            <th>Estado pago</th>
            <th>Dirección</th>
            <th>Estado envío</th>
            <th>total</th>
          </thead>
          <tbody className={s.bodyDetalleVenta}>
            <tr>
              <td>{detalleVenta.id}</td>
              <td>{detalleVenta.idUser}</td>
              <td>{detalleVenta.mailUser}</td>
              <td>{detalleVenta.date}</td>
              <td>
                <div
                  className={s.statusVenta}
                  style={{
                    backgroundColor:
                      detalleVenta.status === "failure"
                        ? "red"
                        : detalleVenta.status === "pending"
                        ? "orange"
                        : "green",
                  }}
                >
                  {detalleVenta.status}
                </div>
              </td>
              <td>{detalleVenta.address}</td>
              <td>
                <div
                  className={s.statusVenta}
                  style={{
                    backgroundColor:
                      detalleVenta.statusDelivery === "failure"
                        ? "red"
                        : detalleVenta.statusDelivery === "pending"
                        ? "orange"
                        : "green",
                  }}
                >
                  {detalleVenta.status}
                </div>
              </td>
              <td>{detalleVenta.total}</td>
            </tr>
          </tbody>
        </table>
        <div className={s.tituloProductosDetalleVenta}>
          Productos de la venta
        </div>
        <table className={s.tablaDetalleVenta}>
          <thead className={s.encabezadoDetalleVenta}>
            <th>Id producto</th>
            <th>Nombre producto</th>
            <th>Cantidad ordenada</th>
            <th>Precio unitario</th>
            <th>Total</th>
            <th>Ir al producto</th>
          </thead>
          <tbody className={s.bodyDetalleVenta}>
            {detalleVenta.products.map((i) => {
              return (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.nombre}</td>
                  <td>{i.cantidad}</td>
                  <td>$ {i.precio}</td>
                  <td>$ {i.cantidad * i.precio}</td>
                  <td>
                    <Link
                    className={s.linkDetalleVenta}
                      to={`/productos/detalle/${i.id}`}
                      target="_blank"
                      rel="noopener no referrer"
                    >
                      <AiOutlineLogout />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <AiOutlineCloseCircle
        onClick={() => {
          setMostrarDetalleVenta(false);
          setIdVenta(null);
        }}
        className={s.iconoCerrar}
      />
    </div>
  );
}
import { ImportContacts } from "@mui/icons-material";

export default ModalDetalleVenta;
