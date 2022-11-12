'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('user', 'admin'),
    status: DataTypes.ENUM('active', 'pending', 'delete')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};