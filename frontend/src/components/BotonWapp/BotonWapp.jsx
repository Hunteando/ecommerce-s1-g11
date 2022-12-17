import React, { useState } from "react";
import s from "./BotonWapp.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function BotonWapp() {
  const [wappActivo, setWappActivo] = useState(false);
  function handlerWapp() {
    open("http://wa.me/+5493564659560", "_blank");
  }

  return (
    <div className={s.contenedorWapp} onClick={handlerWapp}>
      <p className={`${s.textoWapp} ${wappActivo ? s.textoWappActivo : undefined}`}>Escribinos!</p>
      <AiOutlineWhatsApp
        onMouseEnter={() => setWappActivo(true)}
        onMouseLeave={() => setWappActivo(false)}
        className={s.logoWapp}
      />
    </div>
  );
}
