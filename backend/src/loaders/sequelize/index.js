const { Sequelize } = require("sequelize");
const config = require("../../config/environment");

const sequelize =
  // new Sequelize(
  //   config.dataBase.name,
  //   config.dataBase.username,
  //   config.dataBase.password,
  //   {
  //     host: "localhost",
  //     dialect: "postgres",
  //     logging: false,
  //   }
  // );
  config.nodeEnv === "production"
    ? new Sequelize(
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
        config.dataBase.name,
        config.dataBase.username,
        config.dataBase.password,
        {
          host: config.dataBase.host,
          dialect: config.dataBase.dialect,
          logging: false,
          native: false,
        }
      );

module.exports = sequelize;
