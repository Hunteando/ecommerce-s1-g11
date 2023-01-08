const { Sequelize } = require("sequelize");
const config = require("../../config/environment");

const sequelize =
  config.nodeEnv === "production"
    ? new Sequelize(
        // `${process.env.DB_POSTGRES_DEPLOY}`,DB_DIR_COMPLETA
        // {
        //   logging: false, // set to console.log to see the raw SQL queries
        //   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        // }
        config.dataBase.name,
        config.dataBase.username,
        config.dataBase.password,
        {
          host: config.dataBase.host,
          dialect: config.dataBase.dialect,
          logging: false,
        }
      )
    : new Sequelize(
        `postgresql://${config.dataBase.username}:${config.dataBase.password}@${config.dataBase.host}:${config.dataBase.port}/${config.dataBase.name}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );
module.exports = sequelize;
