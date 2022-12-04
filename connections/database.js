const Sequelize = require('sequelize');


//localhost
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');

//Heroku
//    sequelize = new Sequelize(process.env.DATABASE_URL, {
//      dialectOptions: {
//    ssl: {
//    require: true,
//  rejectUnauthorized: false
//}
//        }
//    }
// );

//  sequelize
// .authenticate()
// .then(() => {
//  console.log('Connection has been established successfully.');
// })
//.catch(err => {
//  console.error('Unable to connect to the database:', err);
//});

//exportar funçao cliente
module.exports = {
  
    sequelize: sequelize,
    Sequelize: Sequelize
  }
  