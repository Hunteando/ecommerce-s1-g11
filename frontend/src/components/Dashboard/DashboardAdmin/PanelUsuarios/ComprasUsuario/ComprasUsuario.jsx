import React, { useEffect } from "react";
import s from "./ComprasUsuario.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ComprasUsuario({
  mostrarComprasUsuario,
  setMostrarComprasUsuario,
  idUsuario,
  setIdUsuario,
}) {
  const dispatch = useDispatch();
  const comprasUsuario = useSelector((e) => e.detalleVenta);

  useEffect(() => {
    async function fetch() {
      try {
        // dispatch(obtenerComprasUsuario(idUsuario)) //OBTENER COMPRAS DEL USUARIO
      } catch (error) {
        alert("Error.. no se pudieron obtener las compras del usuario");
      }
    }
    fetch();
  }, []);

  return (
    <div className={s.contenedorComprasUsuario}>
      <div className={s.contenedorIntermedioComprasUsuario}>
        <div className={s.tituloComprasUsuario}>
          Compras usuario {idUsuario}
        </div>
        <div className={s.contenedorIntermedioComprasUsuario}>
          <table className={s.tablaComprasUsuario}>
            <thead>
              <tr className={s.encabezadoComprasUsuario}>
                <th>Id venta</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Estado pago</th>
                <th>Estado entrega</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody className={s.bodyComprasUsuario}>
              {comprasUsuario?.length &&
                comprasUsuario?.map((a) => {
                  return (
                    <tr key={"ventas" + a.id}>
                      <td>{a.id}</td>
                      <td>{a.date}</td>
                      <td>{a.total}</td>
                      <td>
                        <div
                          className={s.statusVenta}
                          style={{
                            backgroundColor:
                              a.status === "failure"
                                ? "red"
                                : a.status === "pending"
                                ? "orange"
                                : "green",
                          }}
                        >
                          {a.status}
                        </div>
                      </td>
                      <td>
                        <div
                          className={s.statusVenta}
                          style={{
                            backgroundColor:
                              a.statusDelivery === "failure"
                                ? "red"
                                : a.statusDelivery === "pending"
                                ? "orange"
                                : "green",
                          }}
                        >
                          {a.statusDelivery}
                        </div>
                      </td>
                      <td>
                        <div
                          className={s.botonDetallesVenta}
                          onClick={(e) => handleVerDetalle(e, a.id)}
                        >
                          <CgDetailsMore />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <AiOutlineCloseCircle
        onClick={() => {
          setMostrarComprasUsuario(!mostrarComprasUsuario);
          setIdUsuario(null);
        }}
        className={s.iconoCerrar}
      />
    </div>
  );
}

export default ComprasUsuario;
