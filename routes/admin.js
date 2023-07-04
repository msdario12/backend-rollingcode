const { Router } = require('express');
const { check } = require('express-validator');
const createUser = require('../controllers/auth.controllers');

const routerAdmin = Router();

routerAdmin.get(
	'/',
	[
		check('name', 'Name is mandatory').not().isEmpty(),
		check('age', 'Age is mandatory').not().isEmpty(),
		check('password', 'password is mandatory').not().isEmpty(),
		check('password', 'password length most be more than 5 chr').isLength({
			min: 5,
		}),
		check('email', 'This is not a valid email').isEmail(),
	],
	createUser
);
routerAdmin.post('/', (req, res) => {
	res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	res.append('Warning', '199 Miscellaneous warning');
	res.json({ msg: 'Peticion recibida' });
	res.sendStatus('202');
});
routerAdmin.put('/editar', (req, res) => {
	res.send('Editar');
});
routerAdmin.delete('/editar', (req, res) => {
	res.send('Eliminar');
});

module.exports = routerAdmin;
