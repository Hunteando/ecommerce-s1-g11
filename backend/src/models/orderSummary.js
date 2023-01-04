const { DataTypes } = require('sequelize')
const sequelize = require('../loaders/sequelize')

// const OrderSummary = sequelize.define('OrderSumary', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false,
//   },
//   reference: DataTypes.STRING(45),
//   date: DataTypes.DATE,
//   status: {
//     type: DataTypes.ENUM,
//     values: ['failure', 'pending', 'success'],
//     defaultValue: 'pending',
//     allowNull: false,
//   },
//   tax: DataTypes.INTEGER,
//   bank: DataTypes.STRING(32),
//   idcart: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   idaddress: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// })

// module.exports = OrderSummary
