import { GET_USER } from "./../actions/actionsLogin";
import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  MODIFY_PRODUCT_CART,
  DELETE_CART,
} from "./../actions/actionsProductos";

const initialState = {
  usuario: {},
  detalleProducto: {
    nombre: "Nombre del productoo",
    imagen: [
      "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
    ],
    precio: "15000",
    descripcion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quaerat eaque impedit, dicta voluptatibus quidem incidunt necessitatibus, molestias praesentium a molestiae vel sapiente nostrum, doloremque inventore consequuntur provident placeat illo.",
    cantidad: 4,
  },
  carro: [
    {
      id: 1,
      nombre: "remera",
      precio: 300,
      cantidad: 4,
      descripcion: "Remera estampada super liviana algodon",
      imagen: [
        "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
        "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
        "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
      ],
      disponible: 10,
    },
    {
      id: 2,
      nombre: "pantalon",
      precio: 400,
      cantidad: 1,
      descripcion: "Pantalon verano - diferentes motivos",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
    {
      id: 3,
      nombre: "gorra",
      precio: 100,
      cantidad: 1,
      descripcion: "Gorra tipo trucker - logo pintado a mano",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
    {
      id: 4,
      nombre: "gorra",
      precio: 100,
      cantidad: 1,
      descripcion: "Gorra tipo trucker - logo pintado a mano",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
    {
      id: 5,
      nombre: "gorra",
      precio: 100,
      cantidad: 1,
      descripcion: "Gorra tipo trucker - logo pintado a mano",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
    {
      id: 6,
      nombre: "gorra",
      precio: 100,
      cantidad: 1,
      descripcion: "Gorra tipo trucker - logo pintado a mano",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
    {
      id: 7,
      nombre: "gorra",
      precio: 100,
      cantidad: 1,
      descripcion: "Gorra tipo trucker - logo pintado a mano",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
    {
      id: 8,
      nombre: "gorra",
      precio: 100,
      cantidad: 1,
      descripcion: "Gorra tipo trucker - logo pintado a mano",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
    {
      id: 9,
      nombre: "gorra",
      precio: 100,
      cantidad: 1,
      descripcion: "Gorra tipo trucker - logo pintado a mano",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
    {
      id: 10,
      nombre: "gorra",
      precio: 100,
      cantidad: 1,
      descripcion: "Gorra tipo trucker - logo pintado a mano",
      imagen: [
        "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      ],
      disponible: 10,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        usuario: action.payload,
      };

    case ADD_PRODUCT_CART:
      return {
        ...state,
        carro: [...state.carro.push(action.payload)],
      };

    case DELETE_PRODUCT_CART:
      const productos = state.carro.filter((i) => i.id !== action.idProducto);
      console.log(productos);
      return {
        ...state,
        carro: productos,
      };

    case MODIFY_PRODUCT_CART:
      const idxProducto = state.carro.findIndex(
        (i) => i.id === action.payload.idProducto
      );
      const nuevaCantidad = [...state.carro];
      nuevaCantidad[idxProducto].cantidad = action.payload.cantidad;
      return {
        ...state,
        carro: nuevaCantidad,
      };

    case DELETE_CART:
      return {
        ...state,
        carro: [],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
