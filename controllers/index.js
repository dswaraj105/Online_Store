const userdb = require('../models/userdb');

exports.getIndex = (req, res, next) => {
  res.render('index');
}

exports.getSignup = (req, res, next) => {
  res.render('pages/register');
}

exports.postRegister = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  
  await userdb.registerUser(name, email, password, phone);
  
  res.redirect('/');
}