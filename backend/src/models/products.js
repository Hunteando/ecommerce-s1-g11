const { DataTypes } = require("sequelize");
const sequelize = require("../loaders/sequelize");

const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING(45),
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER(255),
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      // allowNull: false,
    },
    // code: DataTypes.STRING(45),
    // colors: DataTypes.TEXT,
    // weight: DataTypes.DECIMAL,
    // freeshipping: DataTypes.TINYINT,
    // averageRating: DataTypes.TINYINT(5),
    // numOfReviews: DataTypes.INTEGER,
  },
  {
    timestamps: true,
    createdAt: "created_date",
    updatedAt: "update_date",
    paranoid: true,
    deletedAt: "destroyTime",
  }
);

module.exports = Products;
