import React from "react";
import s from "./SegundoComponente.module.css";

import picture1 from "../../../assets/images/picture1.png";

export default function SegundoComponente() {
  return (
    <div className={s.contenedorSegundoComponente}>
      <div className={s.contenedorImagenHome}>
        <img src={picture1} alt="img principal home" className={s.imagenHome} />
      </div>

      <div className={s.contenedorDerechaHome}>
        <div className={s.tituloContenedorDerecha}>
          Expo Teré en el @ccu.unne
        </div>
        <div className={s.textoContenedorDerecha}>
          ¡Gracias a quienes apoyan el trabajo artístico! Si aún no pudieron ir
          de lunes a viernes de 9 a 12 y de 17 a 20 en Córdoba 794, esquina 9 de
          julio, permanece la muestra
        </div>
        <div className={s.contenedorBoton}>
          <div>Ver Más</div>
        </div>

        <div className={s.textoSecundarioContenedorDerecha}>
          “El equilibrio es una de las artes milenarias que ejercito hace años,
          en donde sea y como sea lo mantengo a la perfección, en el cuerpo,
          RESPIRO, pero un monstruo de lengua larga y fluorescente sigue
          hablando sin pausa dentro de mi.”
        </div>
      </div>
    </div>
  );
}
