const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/sequelize');

const Confirmation = sequelize.define('Confirmation', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    //es igual que payment PREGUNTAR 
    //CART HAS PRODUCTS PREGUNTAR
})