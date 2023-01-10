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
    paymentLink: {
      type: DataTypes.TEXT(),
    },
    paymentStatus: {
      type: DataTypes.ENUM("pending", "paid", "cancel"),
      defaultValue: "pending",
    },
    shippingStatus: {
      type: DataTypes.ENUM("pending", "sending", "completed"),
      defaultValue: "pending",
    },
    shippingAddress: {
      type: DataTypes.TEXT(),
      allowNull: true,
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
