const userdb = require('../models/userdb');
const { use } = require('../routes');

exports.getIndex = (req, res, next) => {
  res.render('index');
}

exports.getSignup = (req, res, next) => {
  res.render('pages/signup');
}

exports.postSignup = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  
  await userdb.registerUser(name, email, password, phone);
  
  res.render('pages/address', {
    email : email
  });
}

exports.getAddress = (req, res, next) => {
  res.redirect('/signup');
}

exports.postAddress = (req, res, next) => {
  const state = req.body.state;
  const city = req.body.city;
  const pincode = req.body.pincode;
  const houseno = req.body.houseno;
  const email = req.body.email; 

  userdb.updateUserAddress(email, state, city, pincode, houseno);

  res.redirect('/');
}

exports.getLogin = (req, res, next) => {
  res.render('pages/login', {
    loginFailed : false,
    login : false
  });
}

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(email, password);
  userdb.validateLogin(email, password)
    .then((result) =>{
      if(result) {
        res.redirect('/');
      } else {
        res.render('pages/login', {
          loginFailed : true,
          login : false
        });
      }
    });
}