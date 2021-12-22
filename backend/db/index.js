const { Sequelize } = require('sequelize');
require('dotenv').config();

//set up of sequelize. set to be sqlite.
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

//creation of exported database object.
const db = {
    sequelize,
    Sequelize,
    models: {},
};

//creation of a model.
db.models.Message = require("./models/message.js")(sequelize);

module.exports = db;