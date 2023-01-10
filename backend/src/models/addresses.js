const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");

const Addresses = sequelize.define("Addresses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  number: { type: DataTypes.INTEGER, allowNull: false },
  city: { type: DataTypes.STRING(40), allowNull: false },
  province: {
    type: DataTypes.ENUM,
    values: [
      "Buenos Aires",
      "Ciudad Autónoma de Buenos Aires",
      "Catamarca",
      "Chaco",
      "Chubut",
      "Córdoba",
      "Corrientes",
      "Entre Ríos",
      "Formosa",
      "Jujuy",
      "La Pampa",
      "La Rioja",
      "Mendoza",
      "Misiones",
      "Neuquén",
      "Río Negro",
      "Salta",
      "San Juan",
      "San Luis",
      "Santa Cruz",
      "Santa Fe",
      "Santiago del Estero",
      "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
      "Tucumán",
    ],
    allowNull: false,
  },
  zipCode: { type: DataTypes.STRING(), allowNull: false },
  detail: { type: DataTypes.STRING(100) },
  contact: { type: DataTypes.BIGINT },
});

module.exports = Addresses; 