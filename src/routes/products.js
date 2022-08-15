const express = require('express');
const router = express.Router();
const productController = require('../controller/products');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProducts);
router.post('/', productController.insert);
router.put('/:id',productController.updateProduct);
router.delete('/:id', productController.delete);
router.post('/search/', productController.search);
router.post('/sort/', productController.sort);

module.exports = router