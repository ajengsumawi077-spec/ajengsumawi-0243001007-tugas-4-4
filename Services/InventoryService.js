const { Product, Category } = require('../Models/Index');
const { Op } = require('sequelize');

class InventoryService {
    async getAdvancedProducts(options = {}) {
        const { page = 1, pageSize = 5, searchName = '', lowStock = null } = options;
        const offset = (page - 1) * pageSize;
        const where = {};
        if (searchName) where.name = { [Op.like]: `%${searchName}%` };
        if (lowStock) where.stock = { [Op.lte]: lowStock };

        return await Product.findAndCountAll({
            where, limit: pageSize, offset,
            include: [{ model: Category, as: 'category' }]
        });
    }
}
module.exports = InventoryService;