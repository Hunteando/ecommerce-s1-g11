// const Categorys = require("../models/categorys");
// const OrderSummary = require("../models/orderSummary");
// const Reviews = require("../models/reviews");
// const TypeDocument = require("../models/typedocument");

const User = require("../models/users");
const UserDetails = require("../models/usersdetails");
const Addresses = require("../models/addresses");
const Product = require("../models/products");

const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");

const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");

User.hasOne(UserDetails, {
  onDelete: "CASCADE",
});

UserDetails.belongsTo(User, {
  onDelete: "CASCADE",
});

User.hasMany(Addresses, {
  onDelete: "CASCADE",
});

Addresses.belongsTo(User, {
  onDelete: "CASCADE",
});

// CART
User.hasOne(Cart);
Cart.belongsTo(User);

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);
CartItem.belongsTo(Product);


// // ORDER

Order.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});
Order.hasMany(OrderItem, {
  as: "orderItems",
});

// // USER ORDER

User.hasMany(Order, {
  as: "orders",
  foreignKey: "userId",
});

// // ORDER ITEM

OrderItem.belongsTo(Order, {
  as: "Order",
});

OrderItem.belongsTo(Product, {
  as: "product", 
});



// /* çççççççççççççççççççç */

// UserDetails.hasOne(TypeDocument, {
//   onDelete: 'CASCADE',
// })
// TypeDocument.belongsTo(UserDetails, {
//   onDelete: 'CASCADE',
// })

// /////////////////////////////////////////////////////////////

// UserDetails.hasMany(Addresses, { onDelete: 'CASCADE' })
// Addresses.belongsTo(UserDetails, { onDelete: 'CASCADE' })

// /////////////////////////////////////////////////////////////

// UserDetails.hasOne(Reviews, { onDelete: 'CASCADE' })
// Reviews.belongsTo(UserDetails, { onDelete: 'CASCADE' })

// /////////////////////////////////////////////////////////////

// UserDetails.hasOne(Cart, { onDelete: 'CASCADE' })
// Cart.belongsTo(UserDetails, { onDelete: 'CASCADE' })

// /////////////////////////////////////////////////////////////

// Addresses.hasOne(OrderSummary, { onDelete: 'CASCADE' })
// OrderSummary.belongsTo(Addresses, { onDelete: 'CASCADE' })

// /////////////////////////////////////////////////////////////

// Product.hasOne(Reviews, { onDelete: 'CASCADE' })
// Reviews.belongsTo(Product, { onDelete: 'CASCADE' })

// /////////////////////////////////////////////////////////////

// Categorys.hasMany(Product, { onDelete: 'CASCADE' })
// Product.belongsTo(Categorys, {
//   //PREGUNTAR LA RELACION!! DUDA
// })

// /////////////////////////////////////////////////////////////

// Cart.hasOne(OrderSummary, { onDelete: 'CASCADE' })

// OrderSummary.belongsTo(Cart, {
//   onDelete: 'CASCADE',
// })

// Cart.belongsToMany(Product, { through: 'Cart_has_Product' })
// Product.belongsToMany(Cart, { through: 'Cart_has_Product' })
