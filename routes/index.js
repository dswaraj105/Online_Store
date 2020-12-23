const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();

router.get('/', indexController.getIndex);

router.get('/signup', indexController.getSignup);

router.post('/register', indexController.postRegister);

module.exports = router;