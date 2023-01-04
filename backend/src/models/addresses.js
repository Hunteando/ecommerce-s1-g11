const { DataTypes } = require('sequelize')
const sequelize = require('../loaders/sequelize')

const Addresses = sequelize.define('Addresses', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  country: DataTypes.STRING(45),
  city: DataTypes.STRING(40),
  province: DataTypes.STRING(45),
})

module.exports = Addresses
