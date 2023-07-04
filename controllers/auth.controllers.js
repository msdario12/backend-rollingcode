const { validationResult } = require('express-validator');

const createUser = (req, res) => {
	const { name, age } = req.body;

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.json({
			errors: errors.mapped(),
		});
	}
	if (age < 18) {
		res.json({ msg: 'Debe ser mayor de edad', age });
		return;
	}
	res.json({ msg: 'Usuario registrado', age });
	res.sendStatus(200);
};

module.exports = createUser;
