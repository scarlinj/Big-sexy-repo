// import the Sequelize constructor from the library
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3001,
  }
);

// create connection to our database, pass in your MySQL information for username and password
// const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// });

module.exports = sequelize;
