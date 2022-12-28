import React, { useState } from "react";
import s from "./ProductosCreados.module.css";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import ModalProductosCreados from "./ModalProductosCreados/ModalProductosCreados";

function ProductosCreados() {
  const productos = useSelector((e) => e.carro);

  const [editarProducto, setEditarProducto] = useState(false);
  const [producto, setProducto] = useState({});

  function handleEditarProducto(e, producto) {
    setEditarProducto(true);
    setProducto(producto);
  }

  function handleEliminarProducto(e, producto) {}

  return (
    <div className={s.contenedorProductosCreados}>
      <table className={s.tablaProductosCreados}>
        <thead>
          <tr className={s.encabezadoProductosCreados}>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
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
                  <td>{a.nombre}</td>
                  <td>{a.precio}</td>
                  <td>{a.descripcion.substring(0, 20)}</td>
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
        <ModalProductosCreados
          producto={producto}
          editarProducto={editarProducto}
          setEditarProducto={setEditarProducto}
        />
      )}
    </div>
  );
}

export default ProductosCreados;
