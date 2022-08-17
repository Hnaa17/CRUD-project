const Pool = require('../config/db');

const selectAll = ({limit, offset, sortby, sort}) => {
    return Pool.query(`select products.id, products.product_name, categories.category_name, products.price, products.stock from products inner join categories on products.product_category = categories.id ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
}
const select = (id) => {
    return Pool.query(`select products.id, products.product_name, categories.category_name, products.price, products.stock from products inner join categories on products.product_category = categories.id WHERE products.id=${id}`);
}
const insert = (product_name, product_category, price, stock) => {
    return Pool.query(`INSERT INTO products (product_name, product_category, price, stock) VALUES ('${product_name}', ${product_category}, ${price}, ${stock})`);
}
const update = (id, product_name, product_category, price, stock) => {
    return Pool.query(`UPDATE products SET product_name='${product_name}', product_category=${product_category}, price=${price}, stock=${stock} WHERE id=${id}`);
}
const deleteProducts = (id) => {
    return Pool.query(`DELETE FROM products WHERE id=${id}`);
}
const countProducts = () => {
    return Pool.query('SELECT COUNT(*) FROM products')
}
const searching = (search) => {
    return Pool.query("select products.id, products.product_name, categories.category_name, products.price, products.stock from products inner join categories on products.product_category = categories.id WHERE products.product_name ILIKE $1", [`%${search}%`]);
}

module.exports = {
    selectAll,
    select,
    insert,
    update,
    deleteProducts,
    countProducts,
    searching
}