const express = require('express');
const router = express.Router();
const categoriesController = require('../controller/categories');

router.get('/search', categoriesController.search);
router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getCategories);
router.post('/', categoriesController.insertCategories);
router.put('/:id',categoriesController.updateCategories);
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router