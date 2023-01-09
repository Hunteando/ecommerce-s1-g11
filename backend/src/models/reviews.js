const { DataTypes } = require('sequelize')
const sequelize = require('../loaders/sequelize')

const Reviews = sequelize.define('Reviews', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  rating: DataTypes.INTEGER,
  title: DataTypes.TEXT,
  comment: DataTypes.TEXT,
})

module.exports = Reviews
