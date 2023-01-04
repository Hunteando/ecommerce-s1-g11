const { DataTypes } = require('sequelize')
const sequelize = require('../loaders/sequelize')

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  num: DataTypes.INTEGER,
  date: DataTypes.DATE, //preguntar
  cantProducts: DataTypes.INTEGER,
  subtotal: DataTypes.DOUBLE,
  total: DataTypes.DOUBLE,
  // iduserdetails:{
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  idcheckout: DataTypes.INTEGER,
})

module.exports = Cart
