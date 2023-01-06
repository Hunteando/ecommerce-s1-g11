const dotenv = require("dotenv");
const Sequelize = require("sequelize");
const Producto = require("./src/models/products");
const express = require("express");
const User = require("./src/models/users");
const UserDetails = require("./src/models/usersdetails");
const { encrypt } = require("./src/controllers/auth");

const app = express();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_DIALECT,
  DB_HOST,
  DB_POSTGRES_DEPLOY,
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

const adminInicial = {
  email: "a@a.a",
  username: "a@a.a",
  password: "Asd123",
  role: "admin",
};

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: false,
  native: false,
});

const sequelizeDeploy = new Sequelize(`${DB_POSTGRES_DEPLOY}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

async function main() {
  try {
    // await sequelize.sync({ force: true });
    await sequelizeDeploy.sync({ force: false });

    console.log("Connection has been established successfully.");
    // app.listen(3008, () => {
    //   console.log("Server listening on http://localhost:3008");
    // });
    try {
      await Producto.bulkCreate(productosIniciales);
      console.log("Exito: Productos creados");
      const user = await User.create({
        username: adminInicial.username,
        email: adminInicial.email,
        password: await encrypt(adminInicial.password),
        role: "admin",
      });
      await UserDetails.create({
        UserId: user.id,
      });
      console.log("Exito: Usuario admin creado");
    } catch (e) {
      console.log(e);
      console.log("Error: productos no creados");
    }
    try {
      const user = await User.create({
        username: adminInicial.username,
        email: adminInicial.email,
        password: await encrypt(adminInicial.password),
        role: "admin",
      });
      await UserDetails.create({
        UserId: user.id,
      });
      console.log("Exito: Usuario admin creado");
    } catch (e) {
      console.log(e);
      console.log("Error: Usuario admin no creado");
    }
    console.log("Server is Ok");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
