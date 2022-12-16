const { Sequelize } = require('sequelize')
const config = require('../../config/environment')

const sequelize = new Sequelize(
  config.dataBase.name,
  config.dataBase.username,
  config.dataBase.password,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
)

module.exports = sequelize
