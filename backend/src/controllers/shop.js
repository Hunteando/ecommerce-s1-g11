const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");
const Product = require("../models/products");
const Sequelize = require("../loaders/sequelize/index");
const Op = require("sequelize").Op;

const getRandomProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      order: Sequelize.literal("random()"),
      limit: 10,
      where: {
        stock: {
          [Op.gt]: 0,
        },
      },
    });
    return res.status(200).json({
      products,
    });
  } catch (error) {
    console.log("error", error);
    res.status(404).json({
      message: error,
    });
  }
};

module.exports = { getRandomProducts };
