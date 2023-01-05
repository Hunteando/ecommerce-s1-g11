const upload = require("../config/multer");
const {
  getAllProducts,
  crearProducto,
  modificarProducto,
  eliminarProducto,
  obtenerProductosEliminados,
  restaurarProductoEliminado,
} = require("../controllers/product");
const { validateProduct } = require("../middlewares/validators");

const productRouter = require("express").Router();

productRouter.get("/dashboard/admin/products", getAllProducts);

productRouter.post(
  "/dashboard/admin/producto",
  // primero validar que sea admin el que esta creando el producto
  // validateProduct, // el producto no se valida en los modelos ya?
  upload.array("image", 5), // antes de crear el producto debemos subir las imagenes, para tener las url
  crearProducto // cuarto crear el producto
);

productRouter.get(
  "/dashboard/admin/producto/eliminados",
  // primero validar que sea admin el que esta eliminando el producto
  obtenerProductosEliminados
);

productRouter.put(
  "/dashboard/admin/producto/:id",
  // primero validar que sea admin el que esta creando el producto
  // validateProduct, // el producto no se valida en los modelos ya?
  upload.array("image", 5),
  modificarProducto
);

productRouter.patch(
  "/dashboard/admin/producto/:id",
  // primero validar que sea admin el que esta recuperando el producto
  restaurarProductoEliminado
);

productRouter.delete(
  "/dashboard/admin/producto/:id",
  // primero validar que sea admin el que esta eliminando el producto
  eliminarProducto
);

module.exports = productRouter;
