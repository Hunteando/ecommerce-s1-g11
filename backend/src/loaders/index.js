const ExpressServer = require('./server/expressServer')
const config = require('../config/environment')

const startServer = async () => {
  const server = new ExpressServer()
  console.log('Express Loaded')

  server.routes()
  server.start()
  // aca puedo crear usuarios, productos,etc rol de admin
  console.log(`Server listening on port ${config.port}`)
}

module.exports = startServer
