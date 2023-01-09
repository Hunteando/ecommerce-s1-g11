const Users = require("../models/users");
const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");

async function getUserCart(req, res, next) {
  console.log("entramos a getUserCart");
  try {
    let carro = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      attributes: {
        exclude: ["updatedAt", "createdAt", "UserID"],
      },
      include: {
        model: CartItem,
        attributes: {
          exclude: ["id", "UserId", "createdAt", "updatedAt"],
        },
      },
    });
    console.log("carro", carro);
    res.status(200).json({ cart: carro });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}

module.exports = { getUserCart };
