const dotenv = require("dotenv");
const Sequelize = require("sequelize");
const Producto = require("./src/models/products");
const express = require("express");

const app = express();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  SECRETO_HASHEO,
  CONTRASENA_MONGO,
  CONTRASENA_MONGO2,
} = process.env;

const productosIniciales = [
  {
    // id: 1,
    name: "remera",
    price: 300,
    description: "Remera estampada super liviana algodon",
    image: [
      "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
      "https://artelista.s3.amazonaws.com/obras/big/0/4/1/7382666047536905.jpg",
    ],
    stock: 10,
  },
  {
    // id: 2,
    name: "pantalon",
    price: 400,
    description: "Pantalon verano - diferentes motivos",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
  {
    // id: 3,
    name: "gorra",
    price: 100,
    description: "Gorra tipo trucker - logo pintado a mano",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
  {
    // id: 4,
    name: "gorra",
    price: 100,
    description: "Gorra tipo trucker - logo pintado a mano",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
  {
    // id: 5,
    name: "gorra",
    price: 100,
    description: "Gorra tipo trucker - logo pintado a mano",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
  {
    // id: 6,
    name: "gorra",
    price: 100,
    description: "Gorra tipo trucker - logo pintado a mano",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
  {
    // id: 7,
    name: "gorra",
    price: 100,
    description: "Gorra tipo trucker - logo pintado a mano",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
  {
    // id: 8,
    name: "gorra",
    price: 100,
    description: "Gorra tipo trucker - logo pintado a mano",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
  {
    // id: 9,
    name: "gorra",
    price: 100,
    description: "Gorra tipo trucker - logo pintado a mano",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
  {
    // id: 10,
    name: "gorra",
    price: 100,
    description: "Gorra tipo trucker - logo pintado a mano",
    image: [
      "https://i.pinimg.com/736x/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg",
    ],
    stock: 10,
  },
];

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: false,
  native: false,
});

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    // app.listen(3008, () => {
    //   console.log("Server listening on http://localhost:3008");
    // });
    try {
      await Producto.bulkCreate(productosIniciales);
      console.log("Exito: Productos creados");
    } catch (e) {
      console.log(e);
      console.log("Error: productos no creados");
    }
    console.log("Server is Ok");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();

// try {
//   const productos = await Producto.bulkCreate(productosIniciales);
//   console.log("Exito: Productos creados");
// } catch (e) {
//   console.log(e);
//   console.log("Error: productos no creados");
// }

// mongoose
//   .connect(
//     // `mongodb+srv://lacrus:${CONTRASENA_MONGO}@ecommercelocal.zgfwsmx.mongodb.net/?retryWrites=true&w=majority`,
//     `mongodb://${DB_HOST}:27017/${DB_NAME}`,
//     // `mongodb+srv://lacrus:${CONTRASENA_MONGO2}@ecommercelocal.8zp2fv3.mongodb.net/?retryWrites=true&w=majority`,
//     {}
//   )
//   .then(() => {
//     console.log("Mongo conectado correctamente");
//   })
//   .catch((e) => {
//     console.log(e, "Error al conectar Mongo");
//   });
// // let usuario = {};
// // try {
// //   usuario = await new Usuario({
// //     email: "123",
// //     contrasena: "123",
// //     rol: "superAdmin",
// //     verificado: true,
// //   });
// //   await usuario.save();
// //   console.log("Exito: superAdmin creado");
// // } catch (e) {
// //   console.log("Error: superAdmin no creado");
// // }

// // const productosIniciales = [
// //   { nombre: "iphone 11", categoria: "electronica", subCategoria: {"celulares"}, vendedor: usuario._id },
// //   { nombre: "prod2", categoria: "cat1", vendedor: usuario._id },
// //   { nombre: "prod3", categoria: "cat1", vendedor: usuario._id },
// // ];
// // try {
// //   const productos = await Producto.insertMany(productosIniciales);
// //   console.log("Exito: productos creados");
// // } catch (e) {
// //   console.log("Error: productos no creados");
// // }

// const categoriasIniciales = [
//   {
//     nombre: "comestibles",
//     subCategoria: ["frutas", "verduras", "envasados", "otro"],
//   },
//   {
//     nombre: "bebidas",
//     subCategoria: ["sin alcohol", "con alcohol", "otro"],
//   },
//   {
//     nombre: "servicios",
//     subCategoria: [
//       "electricidad",
//       "plomeria",
//       "albañileria",
//       "pintor",
//       "de campo",
//       "otro",
//     ],
//   },
//   {
//     nombre: "herramientas",
//     subCategoria: ["electricas", "manuales", "otro"],
//   },
//   { nombre: "otro" },
// ];
// try {
//   const categorias = await Categoria.insertMany(categoriasIniciales);
//   console.log("Exito: categorias creadas");
// } catch (e) {
//   console.log(e);
//   console.log("Error: categorias no creadas");
// }
