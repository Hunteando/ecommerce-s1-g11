const upload = require("../config/multer");
const {
  createProduct,
  getAllProducts,
  uploadImages,
  crearProducto,
  modificarProducto,
} = require("../controllers/product");
const { validateProduct } = require("../middlewares/validators");

const productRouter = require("express").Router();

// productRouter.post('/dashboard/admin', validateProduct, createProduct)
productRouter.post(
  "/dashboard/admin/producto/nuevo",
  // primero validar que sea admin el que esta creando el producto
  // validateProduct, // el producto no se valida en los modelos ya?
  upload.array("image", 5), // antes de crear el producto debemos subir las imagenes, para tener las url
  crearProducto // cuarto crear el producto
);

productRouter.put(
  "/dashboard/admin/producto/modificar/:id",
  // primero validar que sea admin el que esta creando el producto
  // validateProduct, // el producto no se valida en los modelos ya?
  upload.array("image", 5),
  modificarProducto
);

productRouter.post("/dashboard/admin", upload.array("image"), uploadImages);
productRouter.get("/dashboard/admin/products", getAllProducts);

module.exports = productRouter;
