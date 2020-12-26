
exports.getCart = (req, res, next) => {
  res.render('pages/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('pages/orders');
}

exports.getPayments = (req, res, next) => {
  res.render('pages/payments');
};