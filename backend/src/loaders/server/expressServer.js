const express = require ('express');
const config = require('../../config');
const sequelize = require ('../sequelize');


class ExpressServer {


    constructor() {

        this.app = express();
        this.port = config.port;
        this.dbConnect();

    }





    async dbConnect() {

        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }



    async start() {
        this.app.listen(this.port, (error) => { 

            if (error) {
                console.error(err);
                process.exit(1);
                
            }

        })
    }
}

module.exports = ExpressServer;