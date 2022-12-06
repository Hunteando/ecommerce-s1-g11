const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/sequelize');

const Payment = sequelize.define('Payment',{

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    creditCard: DataTypes.INTEGER,
    bank: DataTypes.STRING,
    total: DataTypes.INTEGER,
})

module.exports = Payment