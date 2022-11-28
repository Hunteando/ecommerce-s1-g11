const Image = require('../models/images')
const Products = require('../models/products')

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
  } = req.body

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
    })
    const { id } = product.toJSON()
    await Image.create({ url, ProductId: id })

    return res.status(200).json({
      success: true,
      product,
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    })
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({ include: { all: true } })

    return res.status(200).json({
      success: true,
      products,
    })
  } catch (error) {
    res.status(404).json({
      succes: false,
      message: error,
    })
  }
}

module.exports = { getAllProducts, createProduct }
