import React, { useEffect, useState } from "react";
import s from "./PanelUsuarios.module.css";

import { useSelector, useDispatch } from "react-redux";
import { obtenerUsuarios } from "../../../../redux/actions/actionsLogin";
import ComprasUsuario from "./ComprasUsuario/ComprasUsuario";
import { CgDetailsMore } from "react-icons/cg";
import { ordenarUsuarios } from "../../../../redux/actions/actionsDashboard";

function PanelUsuarios() {
  const dispatch = useDispatch();
  const usuarios = useSelector((e) => e.usuarios);
  const [mostrarComprasUsuario, setMostrarComprasUsuario] = useState(false);
  const [idUsuario, setIdUsuario] = useState(null);

  useEffect(() => {
    try {
      dispatch(obtenerUsuarios()); // OBTENER USUARIOS
    } catch (e) {
      alert("Error! no se pudo obtener los usuarios...");
    }
  }, []);

  const [cambioOrden, setCambioOrden] = useState(false);
  async function handleOrdenarUsuarios(columna) {
    await dispatch(ordenarUsuarios(columna));
    setCambioOrden(!cambioOrden);
  }

  function handleComprasUsuario(e, id) {
    setMostrarComprasUsuario(!mostrarComprasUsuario);
    setIdUsuario(id);
  }

  return (
    <div className={s.contenedorPanelUsuarios}>
      <table className={s.tablaPanelUsuarios}>
        <thead>
          <tr className={s.encabezadoPanelUsuarios}>
            <th
              onClick={() => handleOrdenarUsuarios("id")}
              className={s.cursor}
            >
              Id
            </th>
            <th
              onClick={() => handleOrdenarUsuarios("username")}
              className={s.cursor}
            >
              Username
            </th>
            <th
              onClick={() => handleOrdenarUsuarios("email")}
              className={s.cursor}
            >
              E-mail
            </th>
            <th
              onClick={() => handleOrdenarUsuarios("role")}
              className={s.cursor}
            >
              Rol
            </th>
            <th>Ver compras</th>
          </tr>
        </thead>
        <tbody className={s.bodyPanelUsuarios}>
          {usuarios.length &&
            usuarios?.map((a) => {
              return (
                <tr key={"comprasUsuario" + a.id}>
                  <td>{a.id}</td>
                  <td>{a.username}</td>
                  <td>{a.email}</td>
                  <td>{a.role}</td>
                  <td>
                    <div
                      className={s.botonComprasUsuario}
                      onClick={(e) => handleComprasUsuario(e, a.id)}
                    >
                      <CgDetailsMore />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {mostrarComprasUsuario && (
        <ComprasUsuario
          mostrarComprasUsuario={mostrarComprasUsuario}
          setMostrarComprasUsuario={setMostrarComprasUsuario}
          idUsuario={idUsuario}
          setIdUsuario={setIdUsuario}
        />
      )}
    </div>
  );
}

export default PanelUsuarios;
