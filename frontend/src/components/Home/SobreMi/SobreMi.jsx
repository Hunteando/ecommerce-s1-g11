import React from "react";
import s from "./SobreMi.module.css";

import imgSobreMi from "../../../assets/images/Sobremi.png";

import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function SobreMi() {
  return (
    <div className={s.contenedorSobreMi}>
      <div className={s.primerParteSobreMi}>
        <div className={s.tituloSobreMi}>Sobre mi obra</div>
        <div className={s.textoSobreMi}>
          Un recorrido que trae las formas de lo onírico e inicia por los duelos
          y el dejar ir.
        </div>
        <div className={s.contenedorBotonSobreMi}>
          <div>ACERCA DE MI</div>
        </div>
      </div>
      <img src={imgSobreMi} alt="sobre mi obra" className={s.imagenSobreMi} />
    </div>
  );
}
