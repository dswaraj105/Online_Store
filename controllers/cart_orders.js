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

  res.render('pages/cart', {
    name : name,
    email: email    
  });
}

exports.getOrders = (req, res, next) => {
  const [name, email] = getUser();

  res.render('pages/orders', {
    name : name,
    email: email 
  });
}

exports.getPayments = (req, res, next) => {
  const [name, email] = getUser();

  res.render('pages/payments', {
    name : name,
    email: email 
  });
};