import { Button } from "@mui/material";
import s from "./AppBar.module.css";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesion } from "../../redux/actions/actionsLogin";

const CustomButton = styled(ButtonUnstyled)`
  font-family: comspotM;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: #f99716;
  padding: 6px 24px;
  border-radius: 5px;
  color: #fff;
  transition: all 150ms ease;
  cursor: pointer;
  border: 0px solid transparent;
  height: 100%;
  &:hover {
    background-color: #1e1e1e;
    color: #ffffff;
  }
`;

export default function AppBar() {
  const dispatch = useDispatch();
  const usuario = useSelector((e) => e.usuario);

  function handleCerrarSesion() {
    try {
      dispatch(cerrarSesion);
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem("token");
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        height: "7rem",
        display: "flex",
        position: "fixed",
        top: 0,
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
              whiteSpace: "nowrap",
            }}
          >
            Melinda Muriel
          </Typography>
        </Link>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-around", gap: 2 }}>
        <Link to="/carrito" title="Cart">
          <ShoppingCart
            fontSize="large"
            sx={{ marginLeft: 12, height: "100%" }}
          />
        </Link>

        <Box
          sx={{
            width: "8rem",
            display: "flex",
            alignItems: "center",
            height: "100%",
            alignItem: "center",
            backgroundColor: "#f5f5f5",
          }}
          className={s.btnBorde}
        >
          <BiSearchAlt className={s.imagen} />
          <input type="text" placeholder="Buscar" className={s.input} />
        </Box>

        <Box sx={{ width: "12rem" }}>
          <select className={s.select}>
            <option>Español (Latinoaméricano)</option>
            <option>English (U.S)</option>
            <option>Portugues (Europa)</option>
          </select>
        </Box>

        <Box sx={{ width: "8rem", heigth: "100%" }}>
          {usuario.username ? (
            <CustomButton onClick={handleCerrarSesion}>
              Cerrar sesión
            </CustomButton>
          ) : (
            <Link to="/login" className={s.decoracionTexto}>
              <CustomButton>Iniciar sesión</CustomButton>
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
}
