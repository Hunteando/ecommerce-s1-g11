import React, { useEffect, useState } from "react";
import s from "./ProductosCreados.module.css";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { ordenarProductos } from "../../../../redux/actions/actionsDashboard";
import { obtenerTodosLosProductos } from "../../../../redux/actions/actionsProductos";
import ModalModificarVenta from "./ModalModificarVenta/ModalModificarVenta";

function ProductosCreados() {
  const dispatch = useDispatch();
  const productos = useSelector((e) => e.productos);

  const [editarProducto, setEditarProducto] = useState(false);
  const [producto, setProducto] = useState({});

  const [cambioOrden, setCambioOrden] = useState(false);
  function handleOrdernar(columna) {
    dispatch(ordenarProductos(columna));
    setCambioOrden(!cambioOrden);
  }

  function handleEditarProducto(e, prod) {
    setEditarProducto(true);
    setProducto(prod);
  }

  function handleEliminarProducto(e, producto) {}

  useEffect(() => {
    dispatch(obtenerTodosLosProductos("todos"));

    return () => {
      dispatch(obtenerTodosLosProductos("reset"));
    };
  }, []);

  return (
    <div className={s.contenedorProductosCreados}>
      <table className={s.tablaProductosCreados}>
        <thead>
          <tr className={s.encabezadoProductosCreados}>
            <th onClick={() => handleOrdernar("id")} className={s.cursor}>
              Id
            </th>
            <th onClick={() => handleOrdernar("name")} className={s.cursor}>
              Nombre
            </th>
            <th onClick={() => handleOrdernar("price")} className={s.cursor}>
              Precio
            </th>
            <th>Descripción</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className={s.bodyProductosCreados}>
          {productos.length &&
            productos?.map((a) => {
              return (
                <tr key={"listaProductos" + a.id}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.price}</td>
                  <td>{a.description.substring(0, 20)}</td>
                  <td>
                    <div
                      className={s.botonEditarProducto}
                      onClick={(e) => handleEditarProducto(e, a)}
                    >
                      <AiFillEdit />
                    </div>
                  </td>
                  <td>
                    <div
                      className={s.botonEliminarProducto}
                      onClick={(e) => handleEliminarProducto(e, a.id)}
                    >
                      <AiFillDelete />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {editarProducto && (
        <ModalModificarVenta
          producto={producto}
          editarProducto={editarProducto}
          setEditarProducto={setEditarProducto}
        />
      )}
    </div>
  );
}

export default ProductosCreados;
