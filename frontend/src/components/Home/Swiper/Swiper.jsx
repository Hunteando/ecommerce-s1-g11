import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { GrPrevious, GrNext, GrCart } from "react-icons/gr";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

import "swiper/css";
import "swiper/css/navigation";

import s from "./Swiper.module.css";
import resizeHook from "../../../hooks/resizeHook";

export default function ComponenteSwiper() {
  const productos = useSelector((e) => e.carro);

  const tamanoPantalla = resizeHook();
  let cantidadTarjetas =
    tamanoPantalla.width > 800 ? 3 : tamanoPantalla.width > 400 ? 2 : 1;

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={s.contenedorSwiper}>
      <div className={s.encabezadoSwiper}>
        <div className={s.tituloSwiper}>Mi tienda</div>
        <div className={s.vermasSwiper}>{`Ver más ->`}</div>
      </div>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        spaceBetween={cantidadTarjetas < 3 ? 30 : 50}
        slidesPerView={cantidadTarjetas}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // className={cantidadTarjetas < 3 ? s.swiper : null}
      >
        {productos.map((i) => {
          return (
            <SwiperSlide key={i.id} className={s.contenedorTarjetaSwiper}>
              <img
                src={i.imagen}
                alt="img producto"
                className={s.imagenTarjetaSwiper}
              />
              <div className={s.nombreSwiper}>
                {i.nombre[0].toUpperCase() + i.nombre.substring(1)}
              </div>

              <div className={s.iconoPrecioSwiper}>
                <GrCart className={s.iconoSwiper} />
                <div className={s.precioSwiper}>${i.precio}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        ref={navigationPrevRef}
        className={`${s.contenedorFlechaSwiper} ${s.flechaAtrasSwiper}`}
      >
        <GrPrevious className={s.flechaSwiper} />
      </div>
      <div
        ref={navigationNextRef}
        className={`${s.contenedorFlechaSwiper} ${s.flechaAdelanteSwiper}`}
      >
        <GrNext className={s.flechaSwiper} />
      </div>
    </div>
  );
}
