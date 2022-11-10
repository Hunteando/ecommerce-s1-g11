const allowedOrigins = require('./corsAllowedOrigins');

const corsOptions = {
    origin: (origin, callback) => { // Aqui debemos reemplazar el '*' por el dominio del cliente
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200, // Es necesario para navegadores antiguos (IE11) o algunos SmartTVs
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

module.exports = corsOptions;