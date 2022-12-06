const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/sequelize');

const Telephones = sequelize.define('Telephones',{

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    telephone: DataTypes.TINYINT(13),
    idusersdetails: DataTypes.INTEGER
})

module.exports = Telephones