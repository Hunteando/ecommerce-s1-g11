const { cloudinary } = require("../config/cloudinary");
const fs = require("fs");
const Image = require("../models/images");
const Products = require("../models/products");
const Op = require("sequelize").Op;

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: { all: true },
      order: [["id", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(404).json({
      succes: false,
      message: error,
    });
  }
};

const crearProducto = async (req, res, next) => {
  const { name, price, description, stock } = req.body;
  let imagenes = [];
  if (req.files.length) {
    for (let i = 0; i < req.files.length; i++) {
      imagenes.push(req.files[i].path);
    }
  }
  const producto = await Products.create({
    name,
    description,
    price,
    stock,
    image: imagenes,
  });
  const products = await Products.findAll({
    include: { all: true },
    order: [["id", "ASC"]],
  });
  res.status(200).json({ message: "Product created", products });
};

const modificarProducto = async (req, res, next) => {
  const { id } = req.params;
  let imagenesNuevas = [];
  if (req.files.length) {
    for (let i = 0; i < req.files.length; i++) {
      imagenesNuevas.push(req.files[i].path);
    }
  }
  const producto = await Products.findByPk(id);
  const imagenesABorrar = req.body.imagenesABorrar?.split(",");
  let imagenesProducto = producto.image;
  if (imagenesABorrar?.length) {
    for (let i = 0; i < imagenesABorrar?.length; i++) {
      const imagenBorrar = `${imagenesABorrar[i].split("/").reverse()[1]}/${
        imagenesABorrar[i].split("/").reverse()[0].split(".")[0]
      }`;
      await cloudinary.uploader.destroy(`${imagenBorrar}`);
      imagenesProducto = imagenesProducto.filter((e) => {
        return `${e}` !== `${imagenesABorrar[i]}`;
      });
    }
  }
  const productoNuevo = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    stock: req.body.stock,
    image: imagenesProducto.concat(imagenesNuevas),
  };
  await Products.update(productoNuevo, {
    where: {
      id,
    },
  });
  const products = await Products.findAll({
    include: { all: true },
    order: [["id", "ASC"]],
  });
  res.status(200).json({ mensaje: "Modified product", products });
};

const eliminarProducto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Products.findByPk(id);

    deleted &&
      (await Products.destroy({
        where: {
          id,
        },
      }));

    const products = await Products.findAll({
      include: { all: true },
      order: [["id", "ASC"]],
    });

    deleted
      ? res
          .status(200)
          .json({ mensaje: "Product deleted successfully", products })
      : res
          .status(200)
          .json({ mensaje: "The product was already deleted", products });
  } catch (error) {
    res.status(400).send({ data: error.message });
  }
};

const obtenerProductosEliminados = async (req, res) => {
  try {
    const eliminados = await Products.findAll({
      where: {
        destroyTime: {
          [Op.ne]: null,
        },
      },
      paranoid: false,
      order: [["id", "ASC"]],
    });
    eliminados.length
      ? res
          .status(200)
          .json({ mensaje: "Deleted product/s", products: eliminados })
      : res
          .status(200)
          .json({ mensaje: "No deleted products found", products: [] });
  } catch (error) {
    res.status(400).send({ data: error.message });
  }
};

const restaurarProductoEliminado = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.restore({
      where: {
        id,
      },
    });
    const products = await Products.findAll({ include: { all: true } });
    res
      .status(200)
      .json({ mensaje: "Package restored successfully", products });
  } catch (error) {
    res.status(400).send({ data: error.message });
  }
};

module.exports = {
  getAllProducts,
  crearProducto,
  modificarProducto,
  eliminarProducto,
  obtenerProductosEliminados,
  restaurarProductoEliminado,
};
