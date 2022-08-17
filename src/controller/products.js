const productsModel = require('../models/products')
const createError = require('http-errors');

const productsController = {
    getAllProducts: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;
            const sortby = req.query.sortby || ('product_name') || ('price');
            const sort = req.query.sort || 'ASC';
            const result = await productsModel.selectAll({limit, offset, sortby, sort});
            const {rows:[count]} = await productsModel.countProducts();
            const totalData = parseInt(count.count);
            const totalPage = Math.ceil(totalData / limit);
            res.status(200).json({
             pagination: {
                page: page,
                limit: limit,
                totalData: totalData,
                totalPage: totalPage
                },
                data: result.rows
            })
        } catch (error) {
            res.send(createError(404));
        }
    },
    search: (req, res) => {
        const search = req.query.search ||"";
        productsModel.searching(search)
        .then(result => res.json(result.rows))
        .catch(err => res.send(err));
    },
    getProducts: (req, res) => {
        const id = Number(req.params.id);
        productsModel.select(id)
        .then(result => res.json(result.rows))
        .catch(err => res.send(err));
    },
    insertProducts: async (req, res) => {
        try {
            const {product_name, product_category, price, stock} = req.body;
            await productsModel.insert(product_name, product_category, price, stock)
            res.status(201).json({message: "Product created"});
        } catch (error) {
            res.send(createError(400));
        }
    },
    updateProduct: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const {product_name,product_category,price,stock} = req.body;
            await productsModel.update(id, product_name, product_category, price, stock)
            res.status(201).json({message: "Product updated"});
        } catch (error) {
            res.send(createError(400))
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const id = Number(req.params.id);
            await productsModel.deleteProducts(id);
            res.status(200).json({message: "Product deleted"});
        } catch (error) {
            res.send(createError(400));
        }
    }
}

module.exports = productsController