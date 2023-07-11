const { validationResult } = require('express-validator');
const usersModel = require('../model/users-model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
	const { email, password, name } = req.body;

	// Validación de Express Validator
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			errors: errors.mapped(),
		});
	}

	try {
		// Validar si el email existe en la base de datos
		let user = await usersModel.findOne({ email });

		if (user) {
			console.log(user);
			return res
				.status(400)
				.json({ msg: 'The email is already register in the site' });
		}

		user = new usersModel(req.body);

		// Hashear contraseña
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);
		// Store hash in your password DB.

		await user.save();
		console.log(user);
		res.status(201).json({ msg: 'Usuario registrado' });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Contact with DB Admin',
		});
	}
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	// Validación de Express Validator
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.json({
			errors: errors.mapped(),
		});
	}

	try {
		let user = await usersModel.findOne({ email });
		console.log(user);
		if (!user) {
			return res.status(400).json({ msg: 'Email or password incorrect' });
		}
		// Email existe
		const isPasswordMatch = await bcrypt.compare(password, user.password);
		console.log(isPasswordMatch);
		if (!isPasswordMatch) {
			return res.status(400).json({ msg: 'Email or password incorrect' });
		}
		// Contraseña correcta
		res.status(200).json({ msg: 'Login successful' });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Contact with DB Admin',
		});
	}
};

module.exports = { createUser, loginUser };
