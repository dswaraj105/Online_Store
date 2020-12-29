const e = require('express');
const cartbuydb = require('../models/cart_buydb');
const loginHandler = require('../util/loginHandler');

function getUser (){
  const email = loginHandler.getUserEmail();
  let name = '';
  if(email){
    name = email.split('@')[0];
  }
  return [name, email];
}


exports.getCart = (req, res, next) => {

  const [name, email] = getUser();

  if(! email) {
    res.render('index', {
      name : name,
      email: email
    });

  }else {
    
    cartbuydb.getCartItems(email)
      .then((response) => {
        let cartItems = response[0];
        res.render('pages/cart', {
          name : name,
          email: email,
          items: cartItems
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

exports.getBuyNow = (req, res, next) => {
  const [name, email] =  getUser();

  if(! email) {
    res.render('index', {
      name: name,
      email: email
    });
  } else {

    cartbuydb.getBuyNowItems(email)
      .then((response) => {
        let buyNowItems = response[0];
        console.log('buy now items', buyNowItems);
        res.render('pages/buynow', {
          name : name,
          email: email,
          items: buyNowItems
        });
      })
  }

}

exports.getOrders = (req, res, next) => {
  const [name, email] = getUser();

  if(! email) {
    res.render('index', {
      name : name,
      email: email
    });

  } else {
    res.render('pages/orders', {
      name : name,
      email: email 
    });
  }

}

exports.getPayments = (req, res, next) => {
  const [name, email] = getUser();

  res.render('pages/payments', {
    name : name,
    email: email 
  });
};