import express, { Application } from 'express';
import config from '../../config';
import sequelize from '../sequelize';
//import * as tedious from 'tedious';


class ExpressServer {

    private app: Application;
    private port?: string | number;

    constructor() {

        this.app = express();
        this.port = config.port;
        this.dcConnect();

    }





async dcConnect() {

     try {
         await sequelize.authenticate();
         console.log('Connection has been established successfully.');
       } catch (error) {
         console.error('Unable to connect to the database:', error);
       }
}



    async start() {

        this.app.listen(this.port, () => {

            // if (err) {
            //     console.log(err);
            //     process.exit(1);
            //     return;
            // }
        })
    }
}

export default ExpressServer;