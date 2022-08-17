const express = require('express');
const router = express.Router();
const productController = require('../controller/products');

router.get('/search', productController.search);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProducts);
router.post('/', productController.insertProducts);
router.put('/:id',productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router