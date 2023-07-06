const { Router } = require('express');
const { createUser, loginUser } = require('../controllers/auth.controllers');
const { check } = require('express-validator');

const routerAuth = Router();

routerAuth.post(
	'/signup',
	[
		check('name', 'Name is mandatory').exists().isString(),
		check('email', 'Email is not valid').not().isEmpty().isEmail().isString(),
		check('password', 'Password is not valid').exists().isString().isLength({
			min: 8,
		}),
	],
	createUser
);

routerAuth.post('/login', loginUser);

module.exports = routerAuth;
