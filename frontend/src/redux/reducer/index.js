import { GET_USER, GET_USERS } from "./../actions/actionsLogin";
import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  MODIFY_PRODUCT_CART,
  DELETE_CART,
  GET_PRODUCTS,
} from "./../actions/actionsProductos";

import { ORDER_USERS, ORDER_PRODUCTS } from "../actions/actionsDashboard";

import functionOrdernarUsuarios from "../../utils/functionOdenarUsuarios";
import functionOrdernarProductos from "../../utils/functionOdenarProductos";

const initialState = {
  usuario: {},
  usuarios: [],
  ordenUsuarios: { id: "asc", username: null, email: null, role: null },
  productos: [],
  ordenProductos: { id: "asc", name: null, price: null },
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
  ventas: [
    {
      id: 1,
      date: "2022-12-29",
      status: "pending",
      products: [1, 2, 3],
      address: "Calle 123, Ciudad",
      total: 1500,
      idUser: 15,
      mailUser: "b@b.b",
      statusDelivery: "pending",
    },
    {
      id: 2,
      date: "2022-12-28",
      status: "failure",
      products: [1, 2, 3],
      address: "Calle 123, Ciudad",
      total: 2500,
      idUser: 123,
      mailUser: "a@a.a",
      statusDelivery: "failure",
    },
    {
      id: 3,
      date: "2022-11-29",
      status: "success",
      products: [1, 2, 3],
      address: "Calle 123, Ciudad",
      total: 150,
      idUser: 42,
      mailUser: "c@c.c",
      statusDelivery: "success",
    },
  ],
  detalleVenta: {
    id: 1,
    date: "2022-12-29",
    status: "pending",
    products: [
      {
        id: 1,
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
      {
        id: 1,
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
      {
        id: 3,
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
    ],
    address: "Calle 123, Ciudad",
    total: 1500,
    idUser: 15,
    mailUser: "b@b.b",
    statusDelivery: "pending",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        usuario: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        usuarios: action.payload,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        productos: action.payload,
      };

    case ADD_PRODUCT_CART:
      return {
        ...state,
        carro: [...state.carro.push(action.payload)],
      };

    case DELETE_PRODUCT_CART:
      const productos = state.carro.filter((i) => i.id !== action.idProducto);
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

    // ACTIONS DASHBOARD
    case ORDER_PRODUCTS:
      const respuestaFunctionOrdenarProductos = functionOrdernarProductos(
        action.payload, // columna a ordenar
        state.ordenProductos, // estado de como esta el orden
        state.productos // listado a ordenar
      );
      return {
        ...state,
        productos: respuestaFunctionOrdenarProductos.productosOrdenados,
        ordenProductos: respuestaFunctionOrdenarProductos.ordenProductos,
      };

    case ORDER_USERS:
      const respuestaFunctionOrdenarUsuarios = functionOrdernarUsuarios(
        action.payload,
        state.ordenUsuarios,
        state.usuarios
      );
      return {
        ...state,
        usuarios: respuestaFunctionOrdenarUsuarios.listadoOrdenar,
        ordenUsuarios: respuestaFunctionOrdenarUsuarios.ordenColumnas,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
