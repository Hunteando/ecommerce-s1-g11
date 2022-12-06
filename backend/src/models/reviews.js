const {DataTypes} = require('sequelize');
const sequelize = require('../loaders/sequelize');


const Reviews = sequelize.define('Reviews',{

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    rating: DataTypes.TINYINT(5),
    title: DataTypes.TEXT(100),
    comment: DataTypes.TEXT(300),
    
})

module.exports = Reviews