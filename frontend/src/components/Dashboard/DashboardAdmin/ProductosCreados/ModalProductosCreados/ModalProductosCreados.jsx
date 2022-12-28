import React from "react";
import s from "./ModalProductosCreados.module.css";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";

import InputFormulario from "../../../../../ui/InputFormulario/InputFormulario";
import ImagenesVender from "../../CrearProducto/ImagenesVender/ImagenesVender";
import Swal from "sweetalert2";

let verificarDosNumerosDespuesDeLaComa = /^\d+(\.\d{0,2})?$/;

function ModalProductosCreados({
  producto,
  editarProducto,
  setEditarProducto,
}) {
  const dispatch = useDispatch();

  const [imagen1, setImagen1] = useState(producto.imagen[0] || "");
  const [imagen2, setImagen2] = useState(producto.imagen[1] || "");
  const [imagen3, setImagen3] = useState(producto.imagen[2] || "");
  const [imagen4, setImagen4] = useState(producto.imagen[3] || "");
  const [imagen5, setImagen5] = useState(producto.imagen[4] || "");
  const [nombreImagenesOriginales, setNombreImagenesOriginales] = useState([
    producto.imagen[0] || "",
    producto.imagen[1] || "",
    producto.imagen[2] || "",
    producto.imagen[3] || "",
    producto.imagen[4] || "",
  ]);
  const [nombreImagenes, setNombreImagenes] = useState([
    producto.imagen[0] || "",
    producto.imagen[1] || "",
    producto.imagen[2] || "",
    producto.imagen[3] || "",
    producto.imagen[4] || "",
  ]);

  const [loading, setLoading] = useState(false);

  const initialValues = {
    nombre: producto.nombre || "",
    precio: producto.precio || "",
    descripcion: producto.descripcion || "",
    cantidad: producto.cantidad || "",
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .max(20, "*El nombre debe tener máximo 20 carácteres")
      .required("*Campo requerido"),
    precio: Yup.number()
      .positive("*El precio debe ser positivo")
      .min(0.01, "*Precio minimo $ 0,01")
      .max(100000000, "*Precio maximo $100.000.000")
      .test("is-decimal", "*Maximo dos decimales ej: 9.99", (val) => {
        if (val != undefined) {
          return verificarDosNumerosDespuesDeLaComa.test(val);
        }
        return true;
      })
      .required("*Campo requerido"),
    descripcion: Yup.string()
      .max(150, "*La descripción debe tener máximo 150 carácteres")
      .required("*Campo requerido"),
    cantidad: Yup.number()
      .positive("*Minimo debes vender 1 unidad")
      .min(1, "*Minimo debes vender 1 unidad")
      .required("*Campo requerido"),
  });

  async function onSubmit(e) {
    setLoading(true);
    const formData = new FormData();

    if (nombreImagenesOriginales[0] !== nombreImagenes[0]) {
      if (nombreImagenes[0].length) {
        if (
          imagen1.name.split(".").reverse()[0] !== "png" &&
          imagen1.name.split(".").reverse()[0] !== "jpg" &&
          imagen1.name.split(".").reverse()[0] !== "jpeg"
        ) {
          Swal.fire({
            icon: "error",
            title: "Imagen 1 no soportada",
            text: "Debes subir imagenes .png - .jpg - .jpeg!",
          });
          setLoading(false);
          return;
        }
      }
      nombreImagenes[0].length && formData.append("imagen", imagen1);
    }
    if (nombreImagenesOriginales[1] !== nombreImagenes[1]) {
      if (nombreImagenes[1].length) {
        if (
          imagen2.name.split(".").reverse()[0] !== "png" &&
          imagen2.name.split(".").reverse()[0] !== "jpg" &&
          imagen2.name.split(".").reverse()[0] !== "jpeg"
        ) {
          Swal.fire({
            icon: "error",
            title: "Imagen 2 no soportada",
            text: "Debes subir imagenes .png - .jpg - .jpeg!",
          });
          setLoading(false);
          return;
        }
      }
      nombreImagenes[1].length && formData.append("imagen", imagen2);
    }
    if (nombreImagenesOriginales[2] !== nombreImagenes[2]) {
      if (nombreImagenes[2].length) {
        if (
          imagen3.name.split(".").reverse()[0] !== "png" &&
          imagen3.name.split(".").reverse()[0] !== "jpg" &&
          imagen3.name.split(".").reverse()[0] !== "jpeg"
        ) {
          Swal.fire({
            icon: "error",
            title: "Imagen 3 no soportada",
            text: "Debes subir imagenes .png - .jpg - .jpeg!",
          });
          setLoading(false);
          return;
        }
      }
      nombreImagenes[2].length && formData.append("imagen", imagen3);
    }
    if (nombreImagenesOriginales[3] !== nombreImagenes[3]) {
      if (nombreImagenes[3].length) {
        if (
          imagen4.name.split(".").reverse()[0] !== "png" &&
          imagen4.name.split(".").reverse()[0] !== "jpg" &&
          imagen4.name.split(".").reverse()[0] !== "jpeg"
        ) {
          Swal.fire({
            icon: "error",
            title: "Imagen 4 no soportada",
            text: "Debes subir imagenes .png - .jpg - .jpeg!",
          });
          setLoading(false);
          return;
        }
      }
      nombreImagenes[3].length && formData.append("imagen", imagen4);
    }
    if (nombreImagenesOriginales[4] !== nombreImagenes[4]) {
      if (nombreImagenes[4].length) {
        if (
          imagen5.name.split(".").reverse()[0] !== "png" &&
          imagen5.name.split(".").reverse()[0] !== "jpg" &&
          imagen5.name.split(".").reverse()[0] !== "jpeg"
        ) {
          Swal.fire({
            icon: "error",
            title: "Imagen 5 no soportada",
            text: "Debes subir imagenes .png - .jpg - .jpeg!",
          });
          setLoading(false);
          return;
        }
      }
      nombreImagenes[4].length && formData.append("imagen", imagen5);
    }

    formData.append("nombre", e.nombre);
    formData.append("precio", e.precio);
    formData.append("descripcion", e.descripcion);
    formData.append("cantidad", e.cantidad);

    try {
      await dispatch(modificarProducto(formData));
      Swal.fire({
        icon: "success",
        title: "Producto modificado correctamente!",
        text: "Puedes ver los cambios en el panel!",
      }).then(() => {
        setEditarProducto(!editarProducto);
        resetForm();
      });
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Hubo un error..",
        text: "Puedes intentar nuevamente!",
      });
    }
    setLoading(false);
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleChange,
    handleSubmit,
    errors,
    values,
    touched,
    handleBlur,
    resetForm,
  } = formik;

  function handleCancelarModificar() {
    Swal.fire({
      icon: "question",
      title: "Seguro desea cancelar la modificación?",
      text: "Los cambios no guardados se perderan",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Aceptar",
    }).then(({ isConfirmed }) => {
      if (isConfirmed) setEditarProducto(!editarProducto);
    });
  }

  return (
    <div className={s.contenedorModalModificarProducto}>
      <div className={s.contenedorModalIntermedio}>
        <form
          className={s.formularioModificarProducto}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1 className={s.titulo}>Modificar Producto</h1>
          <InputFormulario
            placeholder="Máximo 20 carácteres"
            tipo="text"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            estiloError={touched.nombre && errors.nombre && true}
            mostrarError={touched.nombre && errors.nombre && true}
            msjError={errors.nombre}
            estilos={s.inputFormModificar}
            id={"nombre"}
            label={"Nombre"}
          />

          <InputFormulario
            placeholder="Entre $0,01 y $100.000.000"
            tipo="number"
            name="precio"
            value={values.precio}
            onChange={handleChange}
            onBlur={handleBlur}
            estiloError={touched.precio && errors.precio && true}
            mostrarError={touched.precio && errors.precio && true}
            msjError={errors.precio}
            estilos={s.inputFormModificar}
            id={"precio"}
            label={"Precio"}
          />

          <label className={s.textareaLabelModificar} htmlFor="descripcion">
            Descripción
          </label>
          <textarea
            id="descripcion"
            placeholder="Máximo 150 caracteres"
            name="descripcion"
            rows={5}
            value={values.descripcion}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${s.input} ${
              touched.descripcion && errors.descripcion && s.error
            } ${s.textareaCrear}`}
          />
          {touched.descripcion && errors.descripcion && (
            <p className={`${s.msjError} ${s.error}`}>{errors.descripcion}</p>
          )}

          <InputFormulario
            placeholder="Minimo 1 unidad"
            tipo="number"
            name="cantidad"
            value={values.cantidad}
            onChange={handleChange}
            onBlur={handleBlur}
            estiloError={touched.cantidad && errors.cantidad && true}
            mostrarError={touched.cantidad && errors.cantidad && true}
            msjError={errors.cantidad}
            estilos={s.inputFormModificar}
            id={"cantidad"}
            label={"Cantidad"}
          />

          <ImagenesVender
            imagen1={imagen1}
            imagen2={imagen2}
            imagen3={imagen3}
            imagen4={imagen4}
            imagen5={imagen5}
            nombreImagenes={nombreImagenes}
            setImagen1={setImagen1}
            setImagen2={setImagen2}
            setImagen3={setImagen3}
            setImagen4={setImagen4}
            setImagen5={setImagen5}
            setNombreImagenes={setNombreImagenes}
          />

          {!loading ? (
            <button className={s.botonModificar} type="submit">
              Modificar producto
            </button>
          ) : (
            <ClipLoader />
          )}
        </form>
        <button
          className={`${s.botonModificar} ${s.botonCancelar}`}
          onClick={handleCancelarModificar}
          type="button"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default ModalProductosCreados;
