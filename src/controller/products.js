const productsModel = require('../models/products')
const productsController = {
    getAllProducts: (req, res) => {
        productsModel.selectAll()
        .then(
            result => res.json(result.rows)
        )
        .catch(err => res.send(err)
        )
    },
    getProducts: (req, res) => {
        const id = Number(req.params.id)
        productsModel.select(id)
        .then(
            result => res.json(result.rows)
        )
        .catch(err => res.send(err)
        )
    },
    insert: (req, res) => {
        const {product_name, product_category, price, stock} = req.body;
        productsModel.insert(product_name, product_category, price, stock)
        .then(
            res.json('Product created')
        )
        .catch(err => res.send(err)
        )
    },
    updateProduct: (req, res) => {
        const id = Number(req.params.id);
        const {product_name,product_category,price,stock} = req.body;
        productsModel.updateProduct(id, product_name, product_category, price, stock)
        .then(
            res.json('Product updated')
        )
        .catch(err => res.send(err)
        )
    },
    delete: (req, res) => {
        const id = Number(req.params.id)
        productsModel.deleteProducts(id)
        .then(
            res.json('Product deleted')
        )
        .catch(err => res.send(err)
        )
    },
    search: (req, res) => {
        const {product_name} = req.body;
        productsModel.search(product_name)
        .then(
            result => res.json(result.rows)
        )
        .catch(err => res.send(err)
        )
    },
    sort: (req, res) => {
        const {sort_by, sort_method} = req.body;
        productsModel.sort(sort_by, sort_method)
        .then(
            result => res.json(result.rows)
        )
        .catch(err => res.send(err)
        )
    },
}

module.exports = productsController