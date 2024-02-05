const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food_delivery', 'postgres', 'shahil', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
