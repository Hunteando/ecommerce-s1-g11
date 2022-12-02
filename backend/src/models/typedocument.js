const { DataTypes } = require('sequelize')
const sequelize = require('../loaders/sequelize')
const TypeDocument = sequelize.define('TypeDocument', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nameTD: {
    type: DataTypes.ENUM('DNI', 'Passport'),
    default: 'DNI',
  },
})

module.exports = TypeDocument
