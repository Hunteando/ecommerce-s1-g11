const express = require('express')
const config = require('../../config/environment')
const sequelize = require('../sequelize')
const mysql = require('mysql2/promise')
require('../../libs/relations')

class ExpressServer {
  constructor() {
    this.app = express()
    this.port = config.port
    this.dbConnect()
  }

  async dbConnect() {
    try {
      const connection = await mysql.createConnection({
        host: config.dataBase.host,
        port: config.dataBase.port,
        user: config.dataBase.username,
        password: config.dataBase.password,
      })
      await connection.query(
        `CREATE DATABASE IF NOT EXISTS \`${config.dataBase.name}\`;`
      )
      await sequelize.authenticate()
      await sequelize.sync()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
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
