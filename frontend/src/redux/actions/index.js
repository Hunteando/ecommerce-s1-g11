import axios, { AxiosError } from "axios";

export const GET_ORDER_DETAILS = "GET_ORDER_DETAILS";

export const getOrderDetail = (id) => {
  try {
    return async function (dispatch) {
      let res = await axios.get("/order/" + id);
      console.log(res);
      return dispatch({ type: GET_ORDER_DETAILS, payload: res.data });
    };
  } catch (error) {
    console.log(error);
  }
};
