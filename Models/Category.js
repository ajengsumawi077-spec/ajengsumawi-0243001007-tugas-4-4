const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Category = sequelize.define('Category', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT }
});
module.exports = Category;