const ExpresServer = require('./server/expressServer');
const config = require('../config');

const startServer = async () =>{

    const server = new ExpresServer();
    console.log('Express Loaded');

    server.start();
    console.log(`Server listening on port ${config.port}`);
}

module.exports = startServer;