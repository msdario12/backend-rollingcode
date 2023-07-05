const { Router } = require('express');
const authController = require('../controllers/auth.controllers');

const routerAuth = Router();

routerAuth.post('/signup', authController.createUser);

routerAuth.post('/login', authController.loginUser);

module.exports = routerAuth;
