import React from "react";
import s from "./SegundoComponente.module.css";

import picture1 from "../../../assets/images/picture1.png";

import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import "../Home/homeStyle.css";

const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #f99716;
  padding: 6px 24px;
  border-radius: 12px;
  width: 130px;
  height: 40px;
  color: #ffffff;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 50px;
  border: none;
  &:hover {
    background-color: #1e1e1e;
    color: #ffffff;
  }
`;

export default function SegundoComponente() {
  return (
    <div className={s.contenedorSegundoComponente}>
      <div className={s.contenedorImagenHome}>
        <img src={picture1} alt="" className={s.imagenHome} />
      </div>

      <div className={s.contenedorDerechaHome}>
        <div className={s.tituloContenedorDerecha}>
          Expo Teré en el @ccu.unne{" "}
        </div>
        {/* <Typography
          component="h2"
          variant="h3"
          sx={{ fontFamily: "comspotM", fontSize: "5rem" }}
        >
          Expo Teré en el @ccu.unne
        </Typography> */}
        <Typography
          component="h6"
          variant="h6"
          sx={{ fontFamily: "comspotM", mt: 3, color: "#6d6d6d" }}
        >
          ¡Gracias a quienes apoyan el trabajo artístico! Si aún no pudieron ir
          de lunes a viernes de 9 a 12 y de 17 a 20 en Córdoba 794, esquina 9 de
          julio, permanece la muestra.{" "}
        </Typography>
        <CustomButton>Ver Más</CustomButton>

        <Typography
          component="h4"
          variant="h4"
          sx={{ fontFamily: "comspotM", mt: 3, color: "#6d6d6d" }}
        >
          01
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{ fontFamily: "comspotM", color: "#1e1e1e" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          officia dolore.sit amet consectetur adipisicing elit
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          sx={{ fontFamily: "comspotM", mt: 3, color: "#6d6d6d" }}
        >
          02
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{ fontFamily: "comspotM", color: "#1e1e1e" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          officia dolore. sit amet consectetur adipisicing elit
        </Typography>
      </div>
    </div>
  );
}
