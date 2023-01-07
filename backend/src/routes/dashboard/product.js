const upload = require("../../config/multer");
const {
  getAllProducts,
  crearProducto,
  modificarProducto,
  eliminarProducto,
  obtenerProductosEliminados,
  restaurarProductoEliminado,
} = require("../../controllers/product");
const { validateProduct } = require("../../middlewares/validators");
const { verificarPermisoAdmin } = require("../../middlewares/authMiddleware");

const productRouter = require("express").Router();

productRouter.get("/", verificarPermisoAdmin, getAllProducts);

productRouter.post(
  "/",
  verificarPermisoAdmin,
  upload.array("image", 5),
  crearProducto
);

productRouter.get(
  "/eliminados",
  verificarPermisoAdmin,
  obtenerProductosEliminados
);

productRouter.put(
  "/:id",
  verificarPermisoAdmin,
  upload.array("image", 5),
  modificarProducto
);

productRouter.patch("/:id", verificarPermisoAdmin, restaurarProductoEliminado);

productRouter.delete("/:id", verificarPermisoAdmin, eliminarProducto);

module.exports = productRouter;
