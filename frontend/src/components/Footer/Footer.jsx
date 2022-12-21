import React from "react";
import s from "./Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={s.contenedorFooter}>
      <div className={s.contenedorUno}>
        <div className={s.nombreFooter}>Melinda Muriel</div>
        <div className={s.textoRedesFooter}>
          ¡Sígueme en mis redes sociales!
        </div>
        <div className={s.contenedorIconosRedesFooter}>
          <BsFacebook
            className={s.iconosredesfooter}
            onClick={() => {
              window.open(
                "https://www.facebook.com/melind.amuriel3/",
                "_blank"
              );
            }}
          />
          <BsInstagram
            className={s.iconosredesfooter}
            onClick={() => {
              window.open(
                "https://www.instagram.com/melinda.muriel3/?hl=es",
                "_blank"
              );
            }}
          />
          <BsTwitter
            className={s.iconosredesfooter}
            onClick={() => {
              window.open("https://twitter.com/home?lang=es", "_blank");
            }}
          />
        </div>
      </div>

      <div className={s.contenedorDos}>
        <div className={s.columnaContenedorDos}>
          <div className={s.tituloContenedorDos}>La artista</div>
          <div className={s.textoContenedorDos}>Home</div>
          <div className={s.textoContenedorDos}>Carrito</div>
          <div className={s.textoContenedorDos}>Sobre mi obra</div>
        </div>

        <div className={s.columnaContenedorDos}>
          <div className={s.tituloContenedorDos}>FAQ</div>
          <div className={s.textoContenedorDos}>Preguntas frecuentes</div>
          <div className={s.textoContenedorDos}>Políticas de Privacidad</div>
          <div className={s.textoContenedorDos}>Contáctame</div>
        </div>
      </div>
      <div className={s.contenedorTres}>
        <div className={s.tituloContenedorTres}>Únete a mí comunidad</div>
        <input
          type="text"
          placeholder="Ingresa tu email"
          className={s.inputSuscribirse}
        />
        <div className={s.contenedorBotonFooter}>
          <div>Subscríbete</div>
        </div>
      </div>
    </div>
  );
}
