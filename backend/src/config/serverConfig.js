const dotenv = require('dotenv')

const envFound = dotenv.config()

if (!envFound) {
  throw new Error("Couldn't find .env file")
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  port: process.env.PORT,
  // dataBase: {
  //   name: process.env.DB_NAME,
  //   username: process.env.DB_USER,
  //   password: process.env.DB_PASSWORD,
  //   host: process.env.DB_HOST,
  //   port: process.env.DB_PORT,
  // },
}
