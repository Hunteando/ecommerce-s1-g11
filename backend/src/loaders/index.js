const ExpressServer = require("./server/expressServer");
const config = require("../config/environment");

const startServer = async () => {
  const server = await new ExpressServer();
  console.log("Express Loaded");

  await server.routes();
  await server.start();
  console.log(`Server listening on port ${config.port}`);
};

module.exports = startServer;
