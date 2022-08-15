const express = require('express');
const router = express.Router();
const detailController = require('../controller/transaction_detail');

router.get('/', detailController.getAllDetail);
router.get('/:id', detailController.getDetail);
router.post('/', detailController.insert);
router.put('/:id',detailController.updateDetail);
router.delete('/:id', detailController.delete);

module.exports = router