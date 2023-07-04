const { Router } = require('express');

const routerAuth = Router();

routerAuth.get('/', (req, res) => {
	res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	res.append('Warning', '199 Miscellaneous warning');
	res.status(202).json({ msg: 'Peticion recibida' });
});
routerAuth.post('/', (req, res) => {
	res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
	res.append('Warning', '199 Miscellaneous warning');
	res.status(202).json({ msg: 'Peticion recibida' });
});
routerAuth.put('/editar', (req, res) => {
	res.send('Editar');
});
routerAuth.delete('/editar', (req, res) => {
	res.send('Eliminar');
});

module.exports = routerAuth;
