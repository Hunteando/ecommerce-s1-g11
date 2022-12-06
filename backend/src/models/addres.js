const { DataTypes} = require('sequelize');
const sequelize = require('../loaders/sequelize');

const Addres = sequelize.define('Addres', {

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    address_line: DataTypes.STRING(40),
    country: DataTypes.STRING(45),
    city: DataTypes.STRING(40),
    municipio: DataTypes.STRING(45),
    role: {
        type: DataTypes.ENUM,
        values: ['user', 'admin'],
        defaultValue: 'user',
        allowNull: false,
    },
    idusersdetails: DataTypes.INTEGER,
})

module.exports = Addres