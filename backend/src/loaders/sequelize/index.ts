import { Sequelize } from 'sequelize';
import config from '../../config';


const dbName = <string>config.dataBase.db_name
const dbUser = <string>config.dataBase.db_user
const dbPassword = <string>config.dataBase.db_password

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {

    host: 'localhost',
    dialect: 'mysql'
  });

  

  export default sequelize;