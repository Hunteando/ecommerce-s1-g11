import React, { useState } from "react";
import s from "./ModalModificarVenta.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputFormulario from "../../../../../ui/InputFormulario/InputFormulario";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import ImagenesModificar from "./Imagenes/ImagenesModificar";
import { modificarProducto } from "../../../../../redux/actions/actionsProductos";

let verificarDosNumerosDespuesDeLaComa = /^\d+(\.\d{0,2})?$/;

export default function ModalModificarVenta({ producto, setEditarProducto }) {
  const dispatch = useDispatch();

  const [imagenes, setImagenes] = useState([
    producto?.image[0] || {},
    producto?.image[1] || {},
    producto?.image[2] || {},
    producto?.image[3] || {},
    producto?.image[4] || {},
  ]);

  const imagenesIniciales = [
    producto.image[0] || false,
    producto.image[1] || false,
    producto.image[2] || false,
    producto.image[3] || false,
    producto.image[4] || false,
  ];

  const [imagenesABorrar, setImagenesABorrar] = useState([]);

  const [nombreImagenes, setNombreImagenes] = useState([
    producto.image[0] || null,
    producto.image[1] || null,
    producto.image[2] || null,
    producto.image[3] || null,
    producto.image[4] || null,
  ]);

  const [cambioImagen, setCambioImagen] = useState(Array(5).fill(false));

  const [modificandoProducto, setModificandoProducto] = useState(false);

  const initialValues = {
    nombre: producto.name,
    precio: producto.price,
    descripcion: producto.description,
    cantidad: producto.stock,
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .max(20, "*El nombre debe tener máximo 20 carácteres")
      .required("*Campo requerido"),
    precio: Yup.number()
      .positive("*El precio debe ser positivo")
      .min(0.01, "*Precio minimo $ 0,01")
      .test("is-decimal", "*Maximo dos decimales ej: 9.99", (val) => {
        if (val != undefined) {
          return verificarDosNumerosDespuesDeLaComa.test(val);
        }
        return true;
      })
      .required("*Campo requerido"),
    descripcion: Yup.string().max(
      150,
      "*La descripción debe tener máximo 150 carácteres"
    ),
    cantidad: Yup.number().required("*Campo requerido"),
  });

  async function onSubmit(e) {
    setModificandoProducto(true);
    const formData = new FormData();

    imagenes.forEach((i) => {
      if (i instanceof Blob) {
        formData.append("image", i);
      }
    });

    formData.append("stock", e.cantidad);
    formData.append("description", e.descripcion);
    formData.append("name", e.nombre);
    formData.append("price", e.precio);
    imagenesABorrar.length &&
      formData.append("imagenesABorrar", imagenesABorrar);
    try {
      console.log(imagenesABorrar);
      console.log(imagenes);

      await dispatch(modificarProducto(producto.id, formData));
      Swal.fire({
        icon: "success",
        title: "Producto modificado correctamente!",
      }).then((i) => {
        resetForm();
        setEditarProducto(false);
      });
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Hubo un error..",
        text: "Puedes intentar nuevamente!",
      });
    }
    setModificandoProducto(false);
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

  function handleBotonCerrar(e) {
    if (e.target.id === "botonCerrar" || e.target.id === "fondoModal") {
      Swal.fire({
        icon: "question",
        title: "Seguro deseas cancelar la modificación?",
        text: "Los cambios modificados no seran guardados",
        showCancelButton: true,
        showConfirmButton: true,
      }).then(({ isConfirmed }) => {
        if (isConfirmed) {
          resetForm();
          setEditarProducto(false);
        }
      });
    }
  }

  return (
    <div
      onClick={handleBotonCerrar}
      id="fondoModal"
      className={s.contenedorModalModificarProducto}
    >
      <div className={s.contenedorModalIntermedio}>
        <form
          className={s.formularioModificarProducto}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h1 className={s.titulo}>Modificando producto...</h1>
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
            placeholder="Inserta una cantidad"
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

          <ImagenesModificar
            imagenes={imagenes}
            setImagenes={setImagenes}
            imagenesIniciales={imagenesIniciales}
            imagenesABorrar={imagenesABorrar}
            setImagenesABorrar={setImagenesABorrar}
            nombreImagenes={nombreImagenes}
            setNombreImagenes={setNombreImagenes}
            cambioImagen={cambioImagen}
            setCambioImagen={setCambioImagen}
          />

          {!modificandoProducto ? (
            <button className={s.botonModificar} type="submit">
              Modificar producto
            </button>
          ) : (
            <ClipLoader />
          )}
        </form>
        <button
          id="botonCerrar"
          className={`${s.botonModificar} ${s.botonCancelar}`}
          onClick={handleBotonCerrar}
          type="button"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
