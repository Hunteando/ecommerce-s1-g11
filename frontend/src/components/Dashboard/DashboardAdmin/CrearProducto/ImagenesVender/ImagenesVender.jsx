import React from "react";
import s from "./ImagenesVender.module.css";

import ImagenVender from "./ImagenVender/ImagenVender";

function ImagenesVender({
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  nombreImagenes,
  setImagen1,
  setImagen2,
  setImagen3,
  setImagen4,
  setImagen5,
  setNombreImagenes,
}) {
  return (
    <div className={s.contenedorImagenes}>
      <p className={s.textoImagenes}>Seleccionar imagenes</p>
      <div className={s.imagenes}>
        <ImagenVender
          key={"imagenvender1"}
          imagen={imagen1}
          setImagen={setImagen1}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={0}
        />

        <ImagenVender
          key={"imagenvender2"}
          imagen={imagen2}
          setImagen={setImagen2}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={1}
        />

        <ImagenVender
          key={"imagenvender3"}
          imagen={imagen3}
          setImagen={setImagen3}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={2}
        />

        <ImagenVender
          key={"imagenvender4"}
          imagen={imagen4}
          setImagen={setImagen4}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={3}
        />

        <ImagenVender
          key={"imagenvender5"}
          imagen={imagen5}
          setImagen={setImagen5}
          nombreImagenes={nombreImagenes}
          setNombreImagenes={setNombreImagenes}
          indexImg={4}
        />
      </div>
    </div>
  );
}

export default ImagenesVender;
