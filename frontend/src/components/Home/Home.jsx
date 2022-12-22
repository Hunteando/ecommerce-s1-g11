import React from "react";
import s from "./Home.module.css";

import { Link } from "react-router-dom";
import SecondComponent from "./segundo/SegundoComponente";
import ThirtComponent from "../../pages/Home/ThirtComponent";
import FourComponent from "../../pages/Home/FourComponent";

import Slider from "./Slider/Slider";

export default function HomePage() {
  return (
    <div className={s.contenedorHome}>
      <Slider />
      <SecondComponent />
      <ThirtComponent />
      <FourComponent />
    </div>
  );
}
