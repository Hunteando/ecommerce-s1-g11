import {} from "./../actions/index.js";

const initialState = {
  carro: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RATING:
      return {
        ...state,
        rating: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
