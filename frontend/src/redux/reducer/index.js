import { GET_USER } from "./../actions/actionsLogin";

const initialState = {
  usuario: {},
  carro: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        usuario: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
