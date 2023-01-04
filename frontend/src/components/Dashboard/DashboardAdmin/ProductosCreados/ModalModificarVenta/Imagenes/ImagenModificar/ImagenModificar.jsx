import React from 'react';
import s from "./ImagenModificar.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

export default function ImagenModificar({
  imagen,
  setImagenes,
  nombreImagenes,
  setNombreImagenes,
  indexImg,
  setCambioImagen,
  cambioImagen,
  imagenesIniciales,
  setImagenesABorrar,
}) {
  function onChangeImagen(e) {
    if (e.target.files[0].type.split("/")[0] !== "image") {
      Swal.fire({
        icon: "error",
        title: "El archivo debe ser una imagen",
      });
      return;
    }
    if (e.target.files[0].size > 2097152) {
      Swal.fire({
        icon: "error",
        title: "La imagen es muy grande",
      });
      return;
    }
    setImagenes((estadoAnterior) => {
      const estadoNuevo = [...estadoAnterior];
      estadoNuevo[indexImg] = e.target.files[0];
      return estadoNuevo;
    });
    const cambio = [...cambioImagen];
    cambio[indexImg] = nombreImagenes[indexImg];
    setCambioImagen(cambio);
    const nombres = [...nombreImagenes];
    nombres[indexImg] = URL.createObjectURL(e.target.files[0]);
    setNombreImagenes(nombres);
  }

  function handlerEliminarImagen() {
    Swal.fire({
      icon: "error",
      title: "Seguro desea eliminar la imagen?",
      text: "No es posible recuperarla desde la pagina.",
      showCancelButton: true,
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (!(imagen instanceof Blob))
          setImagenesABorrar((i) => [...i, imagen]);
        setImagenes((estadoAnterior) => {
          const estadoNuevo = [...estadoAnterior];
          if (estadoNuevo[indexImg]?.length) estadoNuevo[indexImg] = {};
          return estadoNuevo;
        });
        const cambio = [...cambioImagen];
        cambio[indexImg] = nombreImagenes[indexImg];
        setCambioImagen(cambio);
        const nombres = [...nombreImagenes];
        nombres[indexImg] = "";
        setNombreImagenes(nombres);
      }
    });
  }

  return (
    <div className={s.contenedor}>
      {!nombreImagenes[indexImg] ? (
        <>
          <label htmlFor="imagen" className={s.labelImagen}>
            +
          </label>
          <input
            accept="image/*"
            onChange={onChangeImagen}
            className={s.inputImagen}
            type="file"
            id="imagen"
            multiple={false}
            max={4}
          />
        </>
      ) : (
        <>
          <img
            src={nombreImagenes[indexImg]}
            alt={`img ${indexImg}`}
            className={s.imagen}
          />
          <AiFillCloseCircle
            size={20}
            className={s.xImagen}
            onClick={handlerEliminarImagen}
          />
        </>
      )}
    </div>
  );
}
