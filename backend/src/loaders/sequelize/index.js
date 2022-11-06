const { Sequelize } = require ('sequelize');
const config = require ('../../config');


const sequelize = new Sequelize(config.dataBase.name, config.dataBase.username, config.dataBase.password, {

  host: 'localhost',
  dialect: 'mysql'

});

module.exports = sequelize;