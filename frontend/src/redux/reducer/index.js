import { GET_USER } from "./../actions/actionsLogin";

const initialState = {
  usuario: {},
  detalleProducto: {
    nombre: "Nombre del productoo",
    imagen:
      "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
    precio: "15000",
    descripcion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quaerat eaque impedit, dicta voluptatibus quidem incidunt necessitatibus, molestias praesentium a molestiae vel sapiente nostrum, doloremque inventore consequuntur provident placeat illo.",
    cantidad: 4,
  },
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
