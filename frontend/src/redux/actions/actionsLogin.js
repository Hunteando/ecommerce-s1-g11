import axios from "axios";

export const GET_USER = "GET_USER";

export const registroUsuario = (datosUsuario) => {
  let dataUser = {
    // username: `${datosUsuario.nombre} ${datosUsuario.apellido}`,
    username: datosUsuario.email,
    email: datosUsuario.email,
    password: datosUsuario.contrasena,
  };
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "POST",
        data: dataUser,
        withCredentials: true,
        url: "/auth/register",
      });
      if (res.data.success === true) {
        localStorage.setItem("token", res.data.token);
        return dispatch({
          type: GET_USER,
          payload: res.data.user,
          success: true,
        });
      } else {
        return {
          success: false,
          mensaje: res.data.error.errors[0].message || "Error al registrar",
        };
      }
    };
  } catch (error) {
    return { success: false, mensaje: error.message };
  }
};

export const iniciarSesion = (datosUsuario) => {
  let dataUser = {
    email: datosUsuario.email,
    password: datosUsuario.contrasena,
  };
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "POST",
        data: dataUser,
        withCredentials: true,
        url: "/auth/login",
      });
      if (res.data.success === true) {
        localStorage.setItem("token", res.data.token);
        return dispatch({
          type: GET_USER,
          payload: res.data.user,
          success: true,
        });
      } else {
        return {
          success: false,
          mensaje:
            res.data.error.errors[0].message || "Error al iniciar sesión",
        };
      }
    };
  } catch (error) {
    return { success: false, mensaje: error.message };
  }
};

// export const cerrarSesion = (dispatch) => {
//   try {
//     return dispatch({
//       type: GET_USER,
//       payload: {},
//     });
//   } catch (e) {
//     return e;
//   }
// };

export const cerrarSesion = () => {
  try {
    return async function (dispatch) {
      // let res = await axios({
      //   method: "POST",
      //   data: dataUser,
      //   withCredentials: true,
      //   url: "/auth/login",
      // });

      return dispatch({
        type: GET_USER,
        payload: {},
      });
    };
  } catch (error) {
    return { success: false, mensaje: error.message };
  }
};
