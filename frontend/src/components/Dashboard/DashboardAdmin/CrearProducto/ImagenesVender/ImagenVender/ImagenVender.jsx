import React from "react";
import s from "./ImagenVender.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

export default function ImagenVender({
  imagen,
  setImagen,
  nombreImagenes,
  setNombreImagenes,
  indexImg,
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
        text: "No debe pesar mas de 2mb",
      });
      return;
    }
    setImagen(e.target.files[0]);
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
        setImagen("");
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
            {/* <ImPlus size={50} /> */}+
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
