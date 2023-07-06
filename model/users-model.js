const { Schema, model } = require('mongoose');

const usersSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},

	role: {
		type: String,
		default: 'user',
	},
});

module.exports = model('User', usersSchema);
