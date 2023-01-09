const express = require("express");
const config = require("../../config/environment");
const sequelize = require("../sequelize");
const userRouter = require("../../routes/dashboard/user");
const authRouter = require("../../routes/auth");
const productRouter = require("../../routes/dashboard/product");
const { urlencoded } = require("express");
const cors = require("cors");
require("../../libs/relations");
const paymentRouter = require("../../routes/payment");

// SEMILLADO DB
const User = require("../../models/users");
const { encrypt } = require("../../controllers/auth");
const UserDetails = require("../../models/usersdetails");
const cartRouter = require("../../routes/cart");
const shopRouter = require("../../routes/shop");
const creacionUsuarioSuperAdmin = async () => {
  try {
    if (!(await User.findAndCountAll())?.count) {
      try {
        const [usuario, creado] = await User.findOrCreate({
          where: { email: "a@a.a" },
          defaults: {
            username: "SUPERADMIN",
            password: await encrypt("Asd123"),
            role: "superAdmin",
          },
        });
        if (creado) {
          await UserDetails.create({
            UserId: usuario.id,
          });
          console.log("Exito: Usuario admin creado");
        }
      } catch (e) {
        console.log("ERROR AL SEMILLAR DB");
        console.log(e);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

class ExpressServer {
  constructor() {
    this.app = express();
    this.port = config.port;
    this.dbConnect();
  }

  async dbConnect() {
    try {
      await sequelize.sync({ force: false });
      console.log("Connection has been established successfully.");
      // SEMILLADO DB
      await creacionUsuarioSuperAdmin();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  routes() {
    this.app.use(express.urlencoded());
    this.app.use(express.json());
    this.app.use(
      cors()
      //   {
      //   origin: `${config.pathFront}`, //URL DEL FRONT!!
      //   // origin: "http://localhost:3000",
      //   credentials: true,
      // }
    );
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", `${config.pathFront}`);
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE, PATCH"
      );
      next();
    });

    this.app.use("/auth", authRouter);
    this.app.use("/cart", cartRouter);
    this.app.use("/shop", shopRouter);
    this.app.use("/pagos", paymentRouter);
    this.app.use("/dashboard/admin/producto", productRouter);
    this.app.use("/dashboard/admin/users", userRouter);
  }
  async start() {
    this.app.listen(this.port, (error) => {
      if (error) {
        console.error(err);
        process.exit(1);
      }
    });
  }
}

module.exports = ExpressServer;
