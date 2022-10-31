import ExpressServer from './server/expressServer';
import config from '../config';
//import sequelize from './sequelize';

const startServer = async () => {


    const server = new ExpressServer();
    console.log('Express Loaded');

    server.start();
    console.log(`Server listening on port ${config.port}`);
}

export default startServer;