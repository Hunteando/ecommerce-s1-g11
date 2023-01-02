const cloudinary = require("../config/cloudinary");
const fs = require("fs");
const Image = require("../models/images");
const Products = require("../models/products");
const createProduct = async (req, res) => {
  const {
    code,
    name,
    description,
    price,
    stock,
    colors,
    weight,
    freeshipping,
    averageRating,
    numOfReviews,
    url,
  } = req.body;

  try {
    const product = await Products.create({
      code,
      name,
      description,
      price,
      stock,
      colors,
      weight,
      freeshipping,
      averageRating,
      numOfReviews,
    });
    const { id } = product.toJSON();
    await Image.create({ url, ProductId: id });

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};

const crearProducto = async (req, res, next) => {
  const { name, price, description, stock } = req.body;

  console.log("req.files", req.files);
  let imagenes = [];

  if (req.files.length) {
    for (let i = 0; i < req.files.length; i++) {
      imagenes.push(req.files[i].path);
    }
  }

  console.log("imagenes", imagenes);

  const producto = await Products.create({
    name,
    description,
    price,
    stock,
    image: imagenes,
  });

  const products = await Products.findAll({ include: { all: true } });

  res.status(200).json({ message: "Product created", products });
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({ include: { all: true } });

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

const uploadImages = async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, "Images");
  const urls = [];
  const files = req.files;
  if (req.method === "POST") {
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    res.status(200).json({
      success: true,
      data: urls,
    });
  } else {
    res.status(405).json({
      success: false,
      message: "Image not uploaded successfully",
    });
  }
  // INSERCIÓN A LA BASE DE DATOS
  // ACA VIENEN LAS URLS
  console.log(urls);
};
module.exports = { getAllProducts, createProduct, uploadImages, crearProducto };
