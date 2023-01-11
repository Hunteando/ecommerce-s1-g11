const Users = require("../models/users");
const Cart = require("../models/cart");
const CartItems = require("../models/cartItem");
const Products = require("../models/products");
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Address = require("../models/addresses");

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
            "destroyAt",
          ],
        },
        include: {
          model: Products,
          attributes: {
            exclude: ["createdAt", "updateAt", "destroyAt"],
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
        include: {
          model: Products,
        },
      },  
    });
    const cartItem = carrito.CartItems.find((i, idx) => {
      return parseInt(i.ProductId) === parseInt(req.body.id);
    });
    let mensaje = "added product";
    if (!cartItem) {
      await CartItems.create({
        quantity: req.body.quantity,
        CartId: carrito.id,
        ProductId: req.body.id,
      });
    } else {
      if (cartItem.quantity < cartItem.Product.stock) {
        await cartItem.update({
          quantity: (cartItem.quantity += 1), //req.body.quantity,
        });
      } else {
        mensaje = "stock limit";
      }
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
            exclude: ["createdAt", "updateAt", "destroyAt"],
          },
        },
      },
    });
    res.status(200).json({ cart, message: mensaje });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
}

async function modifyProductInCart(req, res) {
  try {
    const carrito = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      include: {
        model: CartItems,
        where: {
          id: req.body.id,
        },
      },
    });

    if (!carrito)
      return res.status(400).send("El carrito/item no es del usuario");

    await carrito.CartItems[0].update(
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
            exclude: ["createdAt", "updateAt", "destroyAt"],
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
    const carrito = await Cart.findOne({
      where: {
        UserId: req.user.id,
      },
      include: {
        model: CartItems,
        where: {
          id: req.body.id,
        },
      },
    });

    if (!carrito)
      return res.status(400).send("El carrito/item no es del usuario");

    await carrito.CartItems[0].destroy({
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
            exclude: ["createdAt", "updateAt", "destroyAt"],
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
    const carrito = await Cart.findOne({
      where: {
        id: req.body.id,
        UserId: req.user.id,
      },
      include: {
        model: CartItems,
      },
    });
    if (!carrito)
      return res.status(400).send("El carrito/item no es del usuario");

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
            exclude: ["createdAt", "updateAt", "destroyAt"],
          },
        },
      },
    });
    res.status(200).json({ cart });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function convertirCarritoEnOrden(req, res, next) {
  try {
    const carrito = await Cart.findOne({
      where: {
        id: req.body.id,
        UserId: req.user.id,
      },
      include: {
        model: CartItems,
        include: {
          model: Products,
        },
      },
    });

    if (!carrito)
      return res.status(400).json({ message: "Error en el proceso de compra" });
    if (!carrito.CartItems.length)
      return res.status(400).json({ message: "La orden no tiene productos" });

    const direccion = await Address.findOne({
      where: {
        id: parseInt(req.body.shippingAddress),
        UserId: req.user.id,
      },
    });

    if (!direccion)
      return res
        .status(400)
        .json({ message: "Error con la dirección de compra" });

    let result = 0;
    if (carrito.CartItems) {
      for (const producto of carrito.CartItems) {
        let final = producto.quantity * producto.Product.price;
        result += final;
      }
    }
    const order = await Order.create({
      total: result,
      paymentMethod: "MercadoPago",
      shippingAddress: `${direccion.street} ${direccion.number}, ${
        direccion.city
      }, ${direccion.zipCode}, ${direccion.province}. Detalle: ${
        direccion.detail || "----"
      }. Contacto: ${direccion.contact || "----"}.`,
      userId: req.user.id,
    });

    if (!order)
      return res
        .status(400)
        .json({ message: "Hubo algun problema con la creación de la orden" });

    const productoParaReq = [];

    try {
      for (const itemCarrito of carrito.CartItems) {
        await OrderItem.create({
          name: itemCarrito.Product.name,
          price: itemCarrito.Product.price,
          quantity: itemCarrito.quantity,
          OrderId: order.id,
          ProductId: itemCarrito.Product.id,
        });
        productoParaReq.push({
          title: itemCarrito.Product.name,
          description: itemCarrito.Product.description?.length
            ? itemCarrito.Product.description
            : "Sin descripcion",
          picture_url: itemCarrito.Product.image?.length
            ? itemCarrito.Product.image[0]
            : "Sin imagen",
          category_id: "Prod eCommerce Melinda Muriel",
          quantity: itemCarrito.quantity,
          unit_price: itemCarrito.Product.price,
        });
      }
    } catch (e) {
      await Order.destroy({
        where: {
          id: order.id,
        },
      });
      return res.status(400).json({
        message: "Hubo algun problema en la creación de los item de la orden",
      });
    }

    await CartItems.destroy({
      where: {
        CartId: carrito.id,
      },
    });

    req.body.productos = productoParaReq;
    req.body.idOrder = order.id;

    next();

    // const ordenes = Order.findAll({
    //   where: {
    //     userId: req.user.id,
    //   },
    // });
    // const orderCreada = Order.findOne({
    //   where: {
    //     id: order.id,
    //   },
    // });
    // const cart = Cart.findOne({
    //   where: {
    //     UserId: req.user.id,
    //   },
    // });
    // return res
    //   .status(200)
    //   .json({ orders: ordenes, createdOrder: orderCreada, cart });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

async function guardarLinkPago(req, res, next) {
  try {
    console.log("req.payment", req.body.payment.init_point);
    await Order.update(
      { paymentLink: req.body.payment.init_point },
      {
        where: {
          id: req.body.idOrder,
        },
      }
    );
    const payment = req.body.payment;
    return res.json(payment);
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
  convertirCarritoEnOrden,
  guardarLinkPago,
};
