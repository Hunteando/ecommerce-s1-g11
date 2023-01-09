const { getRandomProducts } = require("../controllers/shop");

const { verificarPermisoUsuario } = require("../middlewares/authMiddleware");

const shopRouter = require("express").Router();

shopRouter.get("/random", getRandomProducts);

module.exports = shopRouter;
