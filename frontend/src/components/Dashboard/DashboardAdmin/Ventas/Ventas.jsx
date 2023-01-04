import React, { useState } from "react";
import { useSelector } from "react-redux";
import s from "./Ventas.module.css";
import { CgDetailsMore } from "react-icons/cg";
import ModalDetalleVenta from "./ModalDetalleVenta/ModalDetalleVenta";
import functionOrdernarVentas from "../../../../utils/functionOdenarVentas";

function Ventas() {
  const ventas = useSelector((e) => e.ventas);
  const [mostrarDetalleVenta, setMostrarDetalleVenta] = useState(false);
  const [idVenta, setIdVenta] = useState(null);

  function handleVerDetalle(e, idVenta) {
    setMostrarDetalleVenta(!mostrarDetalleVenta);
    setIdVenta(idVenta);
  }

  const [ventasOrdenadas, setVentasOrdenadas] = useState([...ventas]);
  const [ordenarVentas, setOrdenarVentas] = useState({
    id: "asc",
    date: null,
    total: null,
    idUser: null,
    mailUser: null,
    status: null,
    statusDelivery: null,
  });

  function handleOrdenarVentas(columna) {
    functionOrdernarVentas(
      columna,
      ordenarVentas,
      setOrdenarVentas,
      ventasOrdenadas
    );
  }

  return (
    <div className={s.contenedorVentas}>
      <table className={s.tablaVentas}>
        <thead>
          <tr className={s.encabezadoVentas}>
            <th onClick={() => handleOrdenarVentas("id")} className={s.cursor}>
              Id venta
            </th>
            <th
              onClick={() => handleOrdenarVentas("date")}
              className={s.cursor}
            >
              Fecha
            </th>
            <th
              onClick={() => handleOrdenarVentas("total")}
              className={s.cursor}
            >
              Total
            </th>
            <th
              onClick={() => handleOrdenarVentas("idUser")}
              className={s.cursor}
            >
              Id Usuario
            </th>
            <th
              onClick={() => handleOrdenarVentas("mailUser")}
              className={s.cursor}
            >
              Mail usuario
            </th>
            <th
              onClick={() => handleOrdenarVentas("status")}
              className={s.cursor}
            >
              Estado pago
            </th>
            <th
              onClick={() => handleOrdenarVentas("statusDelivery")}
              className={s.cursor}
            >
              Estado entrega
            </th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody className={s.bodyVentas}>
          {ventasOrdenadas?.length &&
            ventasOrdenadas?.map((a) => {
              return (
                <tr key={"ventas" + a.id}>
                  <td>{a.id}</td>
                  <td>{a.date}</td>
                  <td>{a.total}</td>
                  <td>{a.idUser}</td>
                  <td>{a.mailUser}</td>
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
      {mostrarDetalleVenta && (
        <ModalDetalleVenta
          setMostrarDetalleVenta={setMostrarDetalleVenta}
          setIdVenta={setIdVenta}
          idVenta={idVenta}
        />
      )}
    </div>
  );
}

export default Ventas;
