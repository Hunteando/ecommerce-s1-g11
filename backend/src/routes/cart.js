const {
  getUserCart,
  addProductToCart,
  modifyProductInCart,
  deleteProductInCart,
  cleanCart,
} = require("../controllers/cart");
const {
  verificarPermisoAdmin,
  verificarPermisoUsuario,
} = require("../middlewares/authMiddleware");

const cartRouter = require("express").Router();

cartRouter.get("/:id", verificarPermisoUsuario, getUserCart);

cartRouter.post("/:id", verificarPermisoUsuario, addProductToCart);

cartRouter.put("/:id", verificarPermisoUsuario, modifyProductInCart);

cartRouter.delete("/:id", verificarPermisoUsuario, deleteProductInCart);

cartRouter.patch("/:id", verificarPermisoUsuario, cleanCart);

module.exports = cartRouter;
