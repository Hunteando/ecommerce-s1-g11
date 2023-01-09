const express = require('express')
const config = require('../../config/environment')
const sequelize = require('../sequelize')
const mysql = require('mysql2/promise')
const userRouter = require('../../routes/user')
const authRouter = require('../../routes/auth')
const productRouter = require('../../routes/product')
const { urlencoded } = require('express')
const cors = require('cors')
require('../../libs/relations')
const paymentRouter = require('../../routes/payment')

class ExpressServer {
  constructor() {
    this.app = express()
    this.port = config.port
    this.dbConnect()
  }

  async dbConnect() {
    try {
      // const connection = await mysql.createConnection({
      //   host: config.dataBase.host,
      //   port: config.dataBase.port,
      //   user: config.dataBase.username,
      //   password: config.dataBase.password,
      // })
      // await connection.query(
      //   `CREATE DATABASE IF NOT EXISTS \`${config.dataBase.name}\`;`
      // )
      // await sequelize.authenticate()
      await sequelize.sync()
      // try {
      //   // aca puedo crear los usuarios o productos
      // } catch (error) {

      // }
      // await sequelize.sync({ alter: true, force: true })
      // TODO:alter y force solo deben ser usados en desarrollo
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }

  routes() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(
      cors({
        // origin: `${process.env.PATH_FRONT}`, //URL DEL FRONT!!
        origin: 'http://localhost:64340',
        credentials: true,
      })
    )
    this.app.use('/auth', userRouter)
    this.app.use('/auth', authRouter)
    this.app.use('/pagos', paymentRouter)
    this.app.use('/', productRouter)
  }
  async start() {
    this.app.listen(this.port, (error) => {
      if (error) {
        console.error(err)
        process.exit(1)
      }
    })
  }
}

module.exports = ExpressServer
