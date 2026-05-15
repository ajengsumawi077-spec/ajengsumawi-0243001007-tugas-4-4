const Product = require('./Product');
const Category = require('./Category');

// Relasi (Penting!)
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

// Bagian ekspor ini yang bikin error tadi kalau salah
module.exports = { Product, Category };