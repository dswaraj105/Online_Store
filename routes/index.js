const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();

router.get('/', indexController.getIndex);

router.get('/signup', indexController.getSignup);

router.post('/signup', indexController.postSignup);

router.get('/signup/address', indexController.getAddress);

router.post('/signup/address', indexController.postAddress);

router.get('/signup/error', indexController.errorSignup);

router.get('/login', indexController.getLogin);

router.post('/login', indexController.postLogin);

router.post('/logout', indexController.postLogout);

module.exports = router;