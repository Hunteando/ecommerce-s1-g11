import React from "react";
import s from "./SobreMi.module.css";

import imgSobreMi from "../../../assets/images/Sobremi.png";

import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-size: 12px;
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
  margin-left: 320px;
  text-transform: uppercase;
  border: none;
  &:hover {
    background-color: #1e1e1e;
    color: #ffffff;
  }
`;

const FourComponent = () => {
  return (
    <Box
      sx={{
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 4,
      }}
    >
      <Typography component="h2" variant="h3" sx={{ marginLeft: "-45rem" }}>
        Sobre mi obra
      </Typography>
      <Typography
        component="p"
        variant="h4"
        sx={{
          fontFamily: "comspotExI",
          color: "#7d7d7d",
          widht: "40%",
          fontSize: "26px",
          marginLeft: "45rem",
        }}
      >
        Un recorrido que trae las formas de lo onírico e inicia por los duelos y
        el dejar ir.
      </Typography>
      <CustomButton>Acerca de mi</CustomButton>

      <Box component="img" src={imgSobreMi} alt="sobre mi obra" />
    </Box>
  );
};

export default FourComponent;
