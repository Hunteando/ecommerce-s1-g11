const { DataTypes } = require('sequelize')
const sequelize = require('../loaders/sequelize')

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  username: DataTypes.STRING(16),
  email: {
    type: DataTypes.STRING(255),
    unique: true,
  },
  password: DataTypes.STRING(61),
  role: {
    type: DataTypes.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'user',
    allowNull: false,
  },
})

module.exports = User
