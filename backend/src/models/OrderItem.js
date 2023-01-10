const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");

const orderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updateAt",
    paranoid: true,
    deletedAt: "destroyAt",
  }
);

module.exports = orderItem;
