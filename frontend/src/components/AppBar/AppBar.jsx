import { Button } from "@mui/material";
import s from "./AppBar.module.css";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: transparent;
  padding: 6px 24px;
  border-radius: 12px;
  color: #1e1e1e;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid #1e1e1e;
  &:hover {
    background-color: #1e1e1e;
    color: #ffffff;
  }
`;

export default function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "7rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        pt: 5,
      }}
    >
      <Box sx={{ widht: "30rem" }}>
        <Link to="/" className={s.decoracionTexto}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontFamily: "arsenale",
              color: "#1e1e1e",
              fontWeight: "500",
              fontSize: "4rem",
            }}
          >
            Melinda Muriel
          </Typography>
        </Link>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-around", gap: 2 }}>
        <Link to="/viewCart" title="Cart">
          <ShoppingCart fontSize="large" sx={{ marginLeft: 12 }} />
        </Link>

        <Box
          sx={{
            width: "8rem",
            display: "flex",
            height: "2rem",
            alignItem: "center",
            backgroundColor: "#f5f5f5",
          }}
          className={s.btnBorde}
        >
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/512/64/64673.png"
            alt="img"
            sx={{ width: "1.5rem", height: "1.5rem" }}
            className={s.imagen}
          />
          <input type="text" placeholder="Buscar" className={s.input} />
        </Box>
        <Box sx={{ width: "12rem" }}>
          <select className={s.select}>
            <option>Español (Latinoaméricano)</option>
            <option>English (U.S)</option>
            <option>Portugues (Europa)</option>
          </select>
        </Box>

        <Box sx={{ width: "8rem", heigth: "3rem" }}>
          <Link to="/login" className={s.decoracionTexto}>
            <CustomButton>Iniciar sesión</CustomButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
