import React, { useState } from "react";
import s from "./BotonWapp.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import resizeHook from "../../hooks/resizeHook";

export default function BotonWapp() {
  const [wappActivo, setWappActivo] = useState(false);
  function handlerWapp() {
    open("http://wa.me/+5493564659560", "_blank");
  }

  const tamanoPantalla = resizeHook();

  return (
    <div className={s.contenedorWapp} onClick={handlerWapp}>
      <p
        className={`${s.textoWapp} ${
          wappActivo || tamanoPantalla.width < 800
            ? s.textoWappActivo
            : undefined
        }`}
      >
        Escribinos!
      </p>
      <AiOutlineWhatsApp
        onMouseEnter={() => setWappActivo(true)}
        onMouseLeave={() => setWappActivo(false)}
        className={s.logoWapp}
      />
    </div>
  );
}
