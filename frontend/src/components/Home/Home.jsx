import React from "react";
import s from "./Home.module.css";

import Slider from "./Slider/Slider";
import SecondComponent from "./segundo/SegundoComponente";
import MiTienda from "./Swiper/Swiper";
import SobreMi from "./SobreMi/SobreMi";


export default function HomePage() {
  return (
    <div className={s.contenedorHome}>
      <Slider />
      <SecondComponent />
      <MiTienda />
      <SobreMi />
    </div>
  );
}
