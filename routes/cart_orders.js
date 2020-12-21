const express = require('express');

const cartController = require('../controllers/cart_orders');

const router = express.Router();

router.get('/cart/payments', cartController.getPayments);

module.exports = router;