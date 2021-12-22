const { Sequelize, Model } = require('sequelize');

//exporting a function that returns the created class.
module.exports = (sequelize) => {
    class Message extends Model{};

    Message.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: Sequelize.STRING,
        },

        email: {
            type: Sequelize.STRING,
        },

        message: {
            type: Sequelize.STRING,
        },
    }, {
        sequelize
    });

    return Message;
};