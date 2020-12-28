const e = require('express');
const shopdb = require('../models/shopdb');
const loginHandler = require('../util/loginHandler');

function getUser (){
  const email = loginHandler.getUserEmail();
  let name = '';
  if(email){
    name = email.split('@')[0];
  }
  return [name, email];
}

exports.getPhones = (req, res, next) => {
  const [name, email] = getUser();

  shopdb.getProducts('mobile')
    .then(([products]) => {
      res.render('pages/phones',{
        products : products,
        name : name,
        email: email
      });
    })
    .catch((err) => {
      console.log(err);
      res.render(error);
    });
};

exports.getLaptop = (req, res, next) => {
  const [name, email] = getUser();

  shopdb.getProducts('laptop')
    .then(([products]) => {
      res.render('pages/laptop',{
        products : products,
        name : name,
        email: email
      });
    })
    .catch((err) => {
      console.log(err);
      res.render(error);
    });
};

exports.getDslr = (req, res, next) => {
  const [name, email] = getUser();

  shopdb.getProducts('camera')
    .then(([products]) => {
      res.render('pages/dslr',{
        products : products,
        name : name,
        email: email
      });
    })
    .catch((err) => {
      console.log(err);
      res.render(error);
    });
};

exports.buynow = (req, res, next) => {
  const id = req.body.id;
  const email = req.body.email;
  console.log(id, '--added to buy now', email);
  res.json({message: 'ok'});
}

exports.addtocart = (req, res, next) => {
  const id = req.body.id;
  const email = req.body.email;
  console.log(id, '--added to cart', email);
  res.json({message: 'ok'});
}