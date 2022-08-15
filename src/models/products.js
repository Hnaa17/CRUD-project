const Pool = require('../config/db');

const selectAll = () => {
    return Pool.query(`select products.id, products.product_name, categories.category_name, products.price, products.stock from products inner join categories on products.product_category = categories.id`);
}
const select = (id) => {
    return Pool.query(`select products.id, products.product_name, categories.category_name, products.price, products.stock from products inner join categories on products.product_category = categories.id WHERE products.id=${id}`);
}
const insert = (product_name, product_category, price, stock) => {
    return Pool.query(`INSERT INTO products (product_name, product_category, price, stock) VALUES ('${product_name}', ${product_category}, ${price}, ${stock})`);
}
const updateProduct = (id, product_name, product_category, price, stock) => {
    return Pool.query(`UPDATE products SET product_name='${product_name}', product_category=${product_category}, price=${price}, stock=${stock} WHERE id=${id}`);
}
const deleteProducts = (id) => {
    return Pool.query(`DELETE FROM products WHERE id=${id}`);
}
const search = (params) => {
    return Pool.query(`select products.id, products.product_name, categories.category_name, products.price, products.stock from products inner join categories on products.product_category = categories.id WHERE products.product_name LIKE '%${params}%'`);
}
const sort = (sortBy, sortMethod) => {
    return Pool.query(`select products.id, products.product_name, categories.category_name, products.price, products.stock from products inner join categories on products.product_category = categories.id ORDER BY ${sortBy} ${sortMethod}`);
}

module.exports = {
    selectAll,
    select,
    insert,
    updateProduct,
    deleteProducts,
    search,
    sort
}