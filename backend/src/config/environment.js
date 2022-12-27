const dotenv = require('dotenv')

const envFound = dotenv.config()

if (!envFound) {
  throw new Error("Couldn't find .env file")
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  dataBase: {
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  cloud: {
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
  },
  mercadoPago: {
    mercadoPagoToken: process.env.MERCADO_PAGO_TOKEN,
  },
}
