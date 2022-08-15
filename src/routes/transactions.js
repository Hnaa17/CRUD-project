const express = require('express');
const router = express.Router();
const transactionsController = require('../controller/transactions');

router.get('/', transactionsController.getAllTransactions);
router.get('/:id', transactionsController.getTransactions);
router.post('/', transactionsController.insert);
router.put('/:id',transactionsController.updateTransactions);
router.delete('/:id', transactionsController.delete);

module.exports = router