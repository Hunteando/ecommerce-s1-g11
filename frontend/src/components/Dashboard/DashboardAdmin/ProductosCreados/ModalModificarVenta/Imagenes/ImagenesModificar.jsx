import React from "react";
import s from "./ImagenesModificar.module.css";
import ImagenModificar from "./ImagenModificar/ImagenModificar";

function ImagenesModificar({
  imagenes,
  setImagenes,
  imagenesIniciales,
  imagenesABorrar,
  setImagenesABorrar,
  nombreImagenes,
  setNombreImagenes,
  cambioImagen,
  setCambioImagen,
}) {
  return (
    <div className={s.contenedorImagenes}>
      <p className={s.textoImagenes}>Seleccionar imagenes</p>
      <div className={s.imagenes}>
        <ImagenModificar
          key={"imagenModificar1"}
          imagen={imagenes[0]}
          setImagenes={setImagenes}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={0}
          setCambioImagen={setCambioImagen}
          cambioImagen={cambioImagen}
          imagenesIniciales={imagenesIniciales}
          setImagenesABorrar={setImagenesABorrar}
        />

        <ImagenModificar
          key={"imagenModificar2"}
          imagen={imagenes[1]}
          setImagenes={setImagenes}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={1}
          setCambioImagen={setCambioImagen}
          cambioImagen={cambioImagen}
          imagenesIniciales={imagenesIniciales}
          setImagenesABorrar={setImagenesABorrar}
        />

        <ImagenModificar
          key={"imagenModificar3"}
          imagen={imagenes[2]}
          setImagenes={setImagenes}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={2}
          setCambioImagen={setCambioImagen}
          cambioImagen={cambioImagen}
          imagenesIniciales={imagenesIniciales}
          setImagenesABorrar={setImagenesABorrar}
        />

        <ImagenModificar
          key={"imagenModificar4"}
          imagen={imagenes[3]}
          setImagenes={setImagenes}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={3}
          setCambioImagen={setCambioImagen}
          cambioImagen={cambioImagen}
          imagenesIniciales={imagenesIniciales}
          setImagenesABorrar={setImagenesABorrar}
        />

        <ImagenModificar
          key={"imagenModificar5"}
          imagen={imagenes[4]}
          setImagenes={setImagenes}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={4}
          setCambioImagen={setCambioImagen}
          cambioImagen={cambioImagen}
          imagenesIniciales={imagenesIniciales}
          setImagenesABorrar={setImagenesABorrar}
        />
      </div>
    </div>
  );
}

export default ImagenesModificar;
