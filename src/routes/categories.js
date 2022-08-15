const express = require('express');
const router = express.Router();
const categoriesController = require('../controller/categories');

router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getCategories);
router.post('/', categoriesController.insert);
router.put('/:id',categoriesController.update);
router.delete('/:id', categoriesController.delete);

module.exports = router