const Pool = require('../config/db');

const selectAll = () => {
    return Pool.query(`SELECT * FROM categories`);
}
const selectpagination = ({limit, offset, sortby, sort, querysearch}) => {
    return Pool.query(`SELECT * FROM categories ${querysearch}  ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
}
const selectID = (id) => {
    return Pool.query(`SELECT * FROM categories WHERE id=${id}`);
}
const insert = (category_name) => {
    return Pool.query(`INSERT INTO categories (category_name) VALUES ('${category_name}')`);
}
const update = (id, category_name) => {
    return Pool.query(`UPDATE categories SET category_name='${category_name}' WHERE id=${id}`);
}
const deleteCategories = (id) => {
    return Pool.query(`DELETE FROM categories WHERE id=${id}`);
}

module.exports = {
    selectAll,
    selectpagination,
    selectID,
    insert,
    update,
    deleteCategories
}