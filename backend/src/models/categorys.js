const { DataTypes } = require('sequelize')
const sequelize = require('../loaders/sequelize')

const Categorys = sequelize.define('Categorys', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(16),
    allowNull: false,
  },
  description: DataTypes.STRING(45),
  thumbnail: DataTypes.STRING,
})

module.exports = Categorys
