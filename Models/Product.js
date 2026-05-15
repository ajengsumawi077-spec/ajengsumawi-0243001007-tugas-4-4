const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Product = sequelize.define('Product', {
    sku: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL },
    stock: { type: DataTypes.INTEGER }
});
module.exports = Product;