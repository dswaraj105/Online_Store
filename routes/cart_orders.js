const express = require('express');

const cartController = require('../controllers/cart_orders');

const router = express.Router();

router.get('/cart', cartController.getCart);

router.get('/orders', cartController.getOrders);

router.get('/cart/payments', cartController.getPayments);

module.exports = router;