const shopdb = require('../models/shop');

exports.getPhones = (req, res, next) => {
  shopdb.getProducts('mobile')
    .then(([products]) => {
      res.render('pages/phones',{
        products : products
      });
    })
    .catch((err) => {
      console.log(err);
      res.render(error);
    });
};

exports.getLaptop = (req, res, next) => {
  shopdb.getProducts('laptop')
    .then(([products]) => {
      res.render('pages/laptop',{
        products : products
      });
    })
    .catch((err) => {
      console.log(err);
      res.render(error);
    });
};

exports.getDslr = (req, res, next) => {
  shopdb.getProducts('camera')
    .then(([products]) => {
      res.render('pages/dslr',{
        products : products
      });
    })
    .catch((err) => {
      console.log(err);
      res.render(error);
    });
};