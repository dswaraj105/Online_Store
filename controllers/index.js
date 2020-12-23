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
  // console.log(name, email, password);
  let result = await userdb.registerUser(name, email, password);
  console.log(result);
  res.redirect('/');
}