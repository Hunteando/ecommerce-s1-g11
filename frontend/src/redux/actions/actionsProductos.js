import axios from "axios";

export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const MODIFY_PRODUCT_CART = "MODIFY_PRODUCT_CART";
export const DELETE_CART = "DELETE_CART";

export const agregarProductoCarrito = (datosProducto) => {
  try {
    return async function (dispatch) {
      // let res = await axios({
      //   method: "POST",
      //   data: datosProducto,
      //   withCredentials: true,
      //   url: "/",
      // });
      //   if (res.data.success === true) {
      //     return dispatch({
      //       type: ADD_PRODUCT_CART,
      //       payload: datosProducto,
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

export const eliminarProductoCarrito = (datosProducto) => {
  try {
    return async function (dispatch) {
      // let res = await axios({
      //   method: "POST",
      //   data: datosProducto,
      //   withCredentials: true,
      //   url: "/",
      // });
      //   if (res.data.success === true) {
      return dispatch({
        type: DELETE_PRODUCT_CART,
        payload: datosProducto,
        idProducto: datosProducto,
        success: true,
      });
      //   } else {
      //     return {
      //       success: false,
      //       mensaje: res.data.error.errors[0].message || "Error al eliminar producto",
      //     };
      //   }
    };
  } catch (error) {
    return { success: false, mensaje: error.message };
  }
};

export const modificarCantidadProductoCarrito = (datosProducto) => {
  try {
    return async function (dispatch) {
      // let res = await axios({
      //   method: "POST",
      //   data: datosProducto,
      //   withCredentials: true,
      //   url: "/",
      // });
      //   if (res.data.success === true) {
      return dispatch({
        type: MODIFY_PRODUCT_CART,
        payload: datosProducto,
        success: true,
      });
      //   } else {
      //     return {
      //       success: false,
      //       mensaje: res.data.error.errors[0].message || "Error al eliminar producto",
      //     };
      //   }
    };
  } catch (error) {
    return { success: false, mensaje: error.message };
  }
};

export const vaciarCarrito = (datosProducto) => {
  try {
    return async function (dispatch) {
      // let res = await axios({
      //   method: "POST",
      //   data: datosProducto,
      //   withCredentials: true,
      //   url: "/",
      // });
      //   if (res.data.success === true) {
      return dispatch({
        type: DELETE_CART,
        payload: datosProducto,
        success: true,
      });
      //   } else {
      //     return {
      //       success: false,
      //       mensaje: res.data.error.errors[0].message || "Error al eliminar producto",
      //     };
      //   }
    };
  } catch (error) {
    return { success: false, mensaje: error.message };
  }
};
