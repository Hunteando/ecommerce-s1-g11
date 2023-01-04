import axios from "axios";

export const ORDER_USERS = "ORDER_USERS";
export const ORDER_PRODUCTS = "ORDER_PRODUCTS";

export const ordenarUsuarios = (columna) => {
  return function (dispatch) {
    return dispatch({
      type: ORDER_USERS,
      payload: columna,
    });
  };
};

export const ordenarProductos = (columna) => {
  return function (dispatch) {
    return dispatch({
      type: ORDER_PRODUCTS,
      payload: columna,
    });
  };
};
