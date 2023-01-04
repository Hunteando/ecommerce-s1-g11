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
        `postgres://${config.dataBase.username}:${config.dataBase.password}@${config.dataBase.host}:${config.dataBase.port}/${config.dataBase.host}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );
module.exports = sequelize;
