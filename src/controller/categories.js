const categoriesModel = require('../models/categories')
const createError = require('http-errors');

const categoriesController = {
    getAllCategories: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;
            const search = req.query.search;
            let querysearch = '';
            if (search === undefined) {
                querysearch = ``;
            } else {
                querysearch = ` where category_name  like '%${search}%' `;
            }
            const sortby = req.query.sortby || ('id');
            const sort = req.query.sort || 'asc';
            const result = await categoryModel.selectpagination({limit, offset, sortby, sort, querysearch});
            const totalData = parseInt((await categoryModel.selectAll()).rowCount);
            const totalPage = Math.ceil(totalData / limit);
            res.status(200).json({
             pagination: {
                currentPage: page,
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
    getCategories: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const result = await categoryModel.selectID(id);
            res.status(200).json(result.rows);
        } catch (error) {
          res.send(createError(404));
        }
    },
    insert: async (req, res) => {
        try {
            const {category_name} = req.body;
            await categoriesModel.insert(category_name);
            res.status(201).json({message: "New Category Created"});
        } catch (error) {
            res.send(createError(400));
        }
    },
    update: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const {category_name} = req.body;
            await categoriesModel.update(id, category_name);
            res.status(201).json({message: "Category Updated"});
        } catch (error) {
            res.send(createError(400))
        }
    },
    delete: async (req, res) => {
        try {
            const id = Number(req.params.id);
            await categoriesModel.deleteCategories(id);
            res.status(200).json({message: "Category Deleted"});
        } catch (error) {
            res.send(createError(404));
        }
    }
}

module.exports = categoriesController