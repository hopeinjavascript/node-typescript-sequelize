import { Sequelize } from 'sequelize';
import dbConfig from '../constants/db';

// user - sql12.freesqldatabase.com | password = Aksh@ySoodOnl!ne

const sequelize = new Sequelize(
  // 'mysql://sql12.freesqldatabase.com:3306/sql12659424'
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.server,
    dialect: 'mysql',
    // pool: {
    //   max: 4,
    //   min: 4, //0
    //   acquire: 4000, // before throwing an error
    //   idle: 4000, // before releasing
    // },
  }
);

export default sequelize;
