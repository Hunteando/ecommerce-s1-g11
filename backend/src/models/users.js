const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");

const User = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(16),
      unique: true,
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    password: DataTypes.STRING(61),
    role: {
      type: DataTypes.ENUM,
      values: ["user", "admin", "superAdmin"],
      defaultValue: "user",
      allowNull: false,
    },
    // enable: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: null,
    //   defaultValue: true
    // }
  },
  {
    timestamps: true,
    createdAt: "created_date",
    updatedAt: "update_date",
    paranoid: true,
    deletedAt: "destroyTime",
  }
);

module.exports = User;
