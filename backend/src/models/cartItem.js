const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");

const CartItem = sequelize.define("CartItem", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER, 
  },
  // idProduct: {
  //       type: DataTypes.INTEGER,
  // },
});

module.exports = CartItem;
