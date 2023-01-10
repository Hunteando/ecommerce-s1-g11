const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    shippingMethod: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    shippingAddress: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "paid", "cancel"),
      defaultValue: "pending",
    },
  },
  {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    paranoid: true,
    deletedAt: "deletedAt",
  }
);

module.exports = Order;
