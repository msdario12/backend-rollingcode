const { Schema, model } = require('mongoose');

const productsSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
});

module.exports = model('Products', productsSchema);
