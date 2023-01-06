const ExpressServer = require("./server/expressServer");
const config = require("../config/environment");
const User = require("../models/users");
const { encrypt } = require("../controllers/auth");
const UserDetails = require("../models/usersdetails");

const startServer = async () => {
  const server = await new ExpressServer();
  console.log("Express Loaded");

  server.routes();
  server.start();
  // SEMILLADO DB
  try {
    const [usuario, creado] = await User.findOrCreate({
      where: { email: "a@a.a" },
      defaults: {
        username: "ADMINISTRADOR",
        password: await encrypt("Asd123"),
        role: "admin",
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
  // FIN SEMILLADO DB
  console.log(`Server listening on port ${config.port}`);
};

module.exports = startServer;
