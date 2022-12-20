import axios from "axios";

export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";

export const registroUsuario = (datosProducto) => {
  try {
    return async function (dispatch) {
      let res = await axios({
        method: "POST",
        data: datosProducto,
        withCredentials: true,
        url: "/",
      });
      //   if (res.data.success === true) {
      //     localStorage.setItem("token", res.data.token);
      //     return dispatch({
      //       type: ADD_PRODUCT_CART,
      //       payload: res.data.user,
      //       success: true,
      //     });
      //   } else {
      //     return {
      //       success: false,
      //       mensaje: res.data.error.errors[0].message || "Error al registrar",
      //     };
      //   }
    };
  } catch (error) {
    return { success: false, mensaje: error.message };
  }
};
