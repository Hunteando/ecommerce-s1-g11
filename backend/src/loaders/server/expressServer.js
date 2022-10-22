const express = require('express');
const config = require('../../config');

class ExpressServer{

    constructor(){

        this.app = express();
        this.port = config.port;
        
    }



    async start(){

        this.app.listen(this.port,(error) => {

            if (error) {
                console.log(err);
                process.exit(1);
                return;
            }
        })
    }
}

module.exports = ExpressServer;