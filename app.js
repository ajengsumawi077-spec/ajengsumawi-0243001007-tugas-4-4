const sequelize = require('./Config/database');
const { Product, Category } = require('./Models/Index');
const InventoryService = require('./Services/InventoryService');

async function run() {
    await sequelize.sync({ force: true });
    const cat = await Category.create({ name: 'Elektronik' });
    await Product.create({ sku: 'A1', name: 'Laptop', price: 5000, stock: 2, categoryId: cat.id });
    
    const service = new InventoryService();
    const result = await service.getAdvancedProducts({ searchName: 'Lap' });
    console.log('--- HASIL TUGAS AJENG ---');
    console.log(JSON.stringify(result.rows, null, 2));
}
run();