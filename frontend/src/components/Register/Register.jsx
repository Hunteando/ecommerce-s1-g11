import React, { useState } from "react";
import { Copyright } from "../../utils/utils";
import logoGoogle from "../../assets/images/logoGoogle.png";
import { Link } from "react-router-dom";
import s from "./Register.module.css";
import imagenRegistro from "../../assets/images/imagenRegistro.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { registroUsuario } from "../../redux/actions/actionsLogin";

YupPassword(Yup);

export default function Register() {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const dispatch = useDispatch();

  async function onSubmit(e) {
    const registro = await dispatch(registroUsuario(e));
    if (registro.success === true) {
      alert("Usuario creado correctamente");
    } else {
      alert(
        registro.mensaje === "email must be unique"
          ? "Mail ya registrado"
          : registro.mensaje
      );
    }
  }

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("*Ingrese un mail valido")
      .required("*Campo obligatorio"),
    contrasena: Yup.string()
      .min(6, "La contraseña debe tener mínimo 6 caracteres")
      .max(18, "La contraseña debe tener máximo 18 carácteres")
      .minUppercase(1, "La contraseña debe tener al menos 1 mayúscula")
      .minLowercase(1, "La contraseña debe tener al menos 1 minúscula")
      .minNumbers(1, "La contraseña debe tener al menos 1 número")
      .required("*Campo obligatorio"),
    // contrasena2: Yup.string()
    //   .oneOf([Yup.ref("contrasena"), null], "Las contraseñas no coinciden")
    //   .required("*Campo obligatorio"),
    nombre: Yup.string()
      .max(20, "El nombre debe tener máximo 20 carácteres")
      .required("*Campo obligatorio"),
    apellido: Yup.string()
      .max(20, "El apellido debe tener máximo 20 carácteres")
      .required("*Campo obligatorio"),
  });

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

  return (
    <div className={s.contenedorGeneralRegistro}>
      <div className={s.contenedorRegistro}>
        <div className={s.contenedorIzquierdo}>
          <h1 className={s.tituloRegistrarse}>Crear una cuenta</h1>
          <div className={s.contenedorLogeoGoogle}>
            <img src={logoGoogle} alt="logo Google" className={s.logoGoogle} />
            <p className={s.tituloGoogle}>Continuar con google</p>
          </div>
          <p className={s.renglonSeparador}>
            ---------- o Inicie con su Email ----------
          </p>
          <form className={s.contenedorFormRegistro} onSubmit={handleSubmit}>
            <div className={s.renglonNombreApellido}>
              <div className={s.divInputLabel}>
                <label
                  className={`${s.labelRegistro} ${
                    touched.nombre && errors.nombre ? s.errorColor : undefined
                  }`}
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  className={`${s.inputRegistro} ${
                    touched.nombre && errors.nombre ? s.error : undefined
                  }`}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombre}
                />
                {touched.nombre && errors.nombre && (
                  <div className={`${s.errorColor} ${s.msjError}`}>
                    {errors.nombre}
                  </div>
                )}
              </div>
              <div className={s.divInputLabel}>
                <label
                  className={`${s.labelRegistro} ${
                    touched.apellido && errors.apellido
                      ? s.errorColor
                      : undefined
                  }`}
                  htmlFor="apellido"
                >
                  Apellido
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  className={`${s.inputRegistro} ${
                    touched.apellido && errors.apellido ? s.error : undefined
                  }`}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.apellido}
                />
                {touched.apellido && errors.apellido && (
                  <div className={`${s.errorColor} ${s.msjError}`}>
                    {errors.apellido}
                  </div>
                )}
              </div>
            </div>
            <div className={s.divInputLabel}>
              <label
                className={`${s.labelRegistro} ${
                  touched.email && errors.email ? s.errorColor : undefined
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                className={`${s.inputRegistro} ${
                  touched.email && errors.email ? s.error : undefined
                }`}
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className={`${s.errorColor} ${s.msjError}`}>
                  {errors.email}
                </div>
              )}
            </div>

            <div className={s.divInputLabel}>
              <div className={s.divMostrarContrasena}>
                <label
                  className={`${s.labelRegistro} ${
                    touched.contrasena && errors.contrasena
                      ? s.errorColor
                      : undefined
                  }`}
                  htmlFor="password"
                >
                  Contraseña
                </label>

                <div
                  onClick={() => setMostrarContrasena(!mostrarContrasena)}
                  className={s.renglonMostrarContrasena}
                >
                  {mostrarContrasena ? (
                    <AiFillEyeInvisible className={s.iconoMostrarContrasena} />
                  ) : (
                    <AiFillEye className={s.iconoMostrarContrasena} />
                  )}
                  <p className={s.textoMostrarContrasena}>
                    {mostrarContrasena ? "    Ocultar" : "    Mostrar"}
                  </p>
                </div>
              </div>

              <input
                id="password"
                name="contrasena"
                className={`${s.inputRegistro} ${
                  touched.contrasena && errors.contrasena ? s.error : undefined
                }`}
                type={mostrarContrasena ? "text" : "password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contrasena}
              />
              {touched.contrasena && errors.contrasena && (
                <div className={`${s.errorColor} ${s.msjError}`}>
                  {errors.contrasena}
                </div>
              )}
            </div>

            <button className={s.botonRegistrarse} type="submit">
              Crear cuenta
            </button>
          </form>

          <div className={s.renglonLinkIniciarSesion}>
            <p>Ya tienes una cuenta? </p>
            <Link to="/login" className={s.linkIniciarSesion}>
              Iniciar sesión.
            </Link>
          </div>
          {/* <Copyright /> */}
        </div>
        <div className={s.contenedorImagenRegistro} />
      </div>
    </div>
  );
}
