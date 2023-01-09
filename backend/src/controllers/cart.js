const Users = require("../models/users");
const Cart = require("../models/cart");
const CartItems = require("../models/cartItem");
const Products = require("../models/products");

async function getUserCart(req, res, next) {
  try {
    let carro = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      order: [[CartItems, "id", "ASC"]],
      attributes: {
        exclude: ["updatedAt", "createdAt", "UserId"],
      },
      include: {
        model: CartItems,
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "CartId",
            "ProductId",
            "created_date",
            "update_date",
            "destroyTime",
          ],
        },
        include: {
          model: Products,
          attributes: {
            exclude: ["created_date", "update_date", "destroyTime"],
          },
        },
      },
    });
    res.status(200).json({ cart: carro });
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function addProductToCart(req, res) {
  try {
    const carrito = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      include: {
        model: CartItems,
      },
    });
    const cartItem = carrito.CartItems.find((i, idx) => {
      return parseInt(i.ProductId) === parseInt(req.body.id);
    });
    if (!cartItem) {
      await CartItems.create({
        quantity: req.body.quantity,
        CartId: carrito.id,
        ProductId: req.body.id,
      });
    } else {
      await cartItem.update({
        quantity: (cartItem.quantity += 1), //req.body.quantity,
      });
    }
    const cart = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      order: [[CartItems, "id", "ASC"]],
      attributes: {
        exclude: ["updatedAt", "createdAt", "UserID"],
      },
      include: {
        model: CartItems,
        attributes: {
          exclude: ["createdAt", "updatedAt", "CartId", "ProductId"],
        },
        include: {
          model: Products,
          attributes: {
            exclude: ["created_date", "update_date", "destroyTime"],
          },
        },
      },
    });
    res.status(200).json({ cart });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
}

async function modifyProductInCart(req, res) {
  try {
    const cartItem = await CartItems.update(
      {
        quantity: req.body.quantity,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    const cart = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      order: [[CartItems, "id", "ASC"]],
      attributes: {
        exclude: ["updatedAt", "createdAt", "UserID"],
      },
      include: {
        model: CartItems,
        attributes: {
          exclude: ["createdAt", "updatedAt", "CartId", "ProductId"],
        },
        include: {
          model: Products,
          attributes: {
            exclude: ["created_date", "update_date", "destroyTime"],
          },
        },
      },
    });
    res.status(200).json({ cart });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function deleteProductInCart(req, res) {
  try {
    await CartItems.destroy({
      where: {
        id: req.body.id,
      },
    });
    const cart = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      order: [[CartItems, "id", "ASC"]],
      attributes: {
        exclude: ["updatedAt", "createdAt", "UserID"],
      },
      include: {
        model: CartItems,
        attributes: {
          exclude: ["createdAt", "updatedAt", "CartId", "ProductId"],
        },
        include: {
          model: Products,
          attributes: {
            exclude: ["created_date", "update_date", "destroyTime"],
          },
        },
      },
    });
    res.status(200).json({ cart });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function cleanCart(req, res) {
  try {
    await CartItems.destroy({
      where: {
        CartId: req.body.id,
      },
    });
    const cart = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      order: [[CartItems, "id", "ASC"]],
      attributes: {
        exclude: ["updatedAt", "createdAt", "UserID"],
      },
      include: {
        model: CartItems,
        attributes: {
          exclude: ["createdAt", "updatedAt", "CartId", "ProductId"],
        },
        include: {
          model: Products,
          attributes: {
            exclude: ["created_date", "update_date", "destroyTime"],
          },
        },
      },
    });
    res.status(200).json({ cart });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

module.exports = {
  getUserCart,
  addProductToCart,
  modifyProductInCart,
  deleteProductInCart,
  cleanCart,
};
