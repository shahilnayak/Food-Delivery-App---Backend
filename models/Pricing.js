const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Pricing = sequelize.define('Pricing', {
    base_distance_in_km: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    km_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    fix_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    organization_id: { 
        type: DataTypes.STRING, 
        allowNull: false,
    },
    zone: { 
        type: DataTypes.STRING, 
        allowNull: false,
    },
    item_id: { 
        type: DataTypes.STRING, 
        allowNull: false,
    },
}, {
    tableName: 'Pricing' 
});

module.exports = Pricing;
