const { DataTypes } = require('sequelize')
const sequelize = require('../loaders/sequelize')

const UserDetails = sequelize.define('UserDetails', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  firstname: DataTypes.STRING(50),
  lastname: DataTypes.STRING(255),
})

module.exports = UserDetails