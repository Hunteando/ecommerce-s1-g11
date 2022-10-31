import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ecommerce-g11', 'root', 'root', {

    host: 'localhost',
    dialect: 'mssql'
  });

  

  export default sequelize;