import sequelize from "../loaders/index"
import { DataTypes } from "sequelize";

const UserModel = sequelize.define("users", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
  },
  {
    timestamps: true,
  }
);


export default UserModel;
