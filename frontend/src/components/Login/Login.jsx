import React, { useState } from "react";
import { Copyright } from "../../utils/utils";
import logoGoogle from "../../assets/images/logoGoogle.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import s from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { iniciarSesion } from "../../redux/actions/actionsLogin";

YupPassword(Yup);

export default function Login() {
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  async function onSubmit(e) {
    const registro = await dispatch(iniciarSesion(e));
    if (params.id !== undefined) {
      if (registro.success === true) {
        navigate(`/productos/detalle/${params.id}`);
      } else {
        alert(registro.mensaje);
      }
    } else {
      if (registro.success === true) {
        navigate("/");
      } else {
        alert(registro.mensaje);
      }
    }
  }

  const initialValues = {
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
    <div className={s.contenedorGeneralLogin}>
      <div className={s.contenedorLogin}>
        <div className={s.contenedorIzquierdo}>
          <h1>Iniciar sesión</h1>
          <div className={s.contenedorLogeoGoogle}>
            <img src={logoGoogle} alt="logo Google" className={s.logoGoogle} />
            <p className={s.tituloGoogle}>Continuar con google</p>
          </div>
          <p className={s.renglonSeparador}>
            ---------- o Inicie con su Email ----------
          </p>
          <form className={s.contenedorFormLogin} onSubmit={handleSubmit}>
            <div className={s.divInputLabel}>
              <label
                className={`${s.labelLogin} ${
                  touched.email && errors.email ? s.errorColor : undefined
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                className={`${s.inputLogin} ${
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
                  className={`${s.labelLogin} ${
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
                className={`${s.inputLogin} ${
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
              Iniciar Sesión
            </button>
          </form>

          <div className={s.renglonLinkRegistrarse}>
            <p>¿No está registrado? </p>
            <Link to="/registrarse" className={s.linkRegistrarse}>
              Cree una cuenta nueva.
            </Link>
          </div>
          {/* <Copyright /> */}
        </div>
        <div className={s.contenedorImagenLogin} />
      </div>
    </div>
  );
}
