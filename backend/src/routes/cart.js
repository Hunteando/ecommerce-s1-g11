const { getUserCart } = require("../controllers/cart");
const {
  verificarPermisoAdmin,
  verificarPermisoUsuario,
} = require("../middlewares/authMiddleware");

const cartRouter = require("express").Router();

cartRouter.get(
  "/:id",
  (req, res, next) => {
    next();
  },
  verificarPermisoUsuario,
  getUserCart
);

module.exports = cartRouter;
