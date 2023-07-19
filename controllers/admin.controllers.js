const { validationResult, matchedData } = require('express-validator');
const usersModel = require('../model/users-model');
const productsModel = require('../model/products-model');

const uploadUsers = async (req, res) => {
	console.log('Hi');
	try {
		const users = await usersModel.find();
		console.log(users);
		res.status(200).json({ data: users });
	} catch (error) {
		console.log(error);
		res.status(500).send('Contact with admin');
	}
};

const createProduct = async (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		res.json({ msg: result.array() });
		return;
	}

	const data = matchedData(req);

	try {
		const newProduct = new productsModel(data);

		await newProduct.save();

		res.status(201).json({ msg: 'Añadido correctamente ', data: newProduct });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Contact to admin' });
	}
};
const getAllProducts = async (req, res) => {
	try {
		const productsList = await productsModel.find();
		res.status(200).json({ data: productsList });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Contact to admin' });
	}
};
const editProduct = async (req, res) => {
	const { id } = req.params;
	try {
		let foundProduct = await productsModel.findById(id);
		if (!foundProduct) {
			return res.status(404).json({ msg: 'Product not found' });
		}

		const updatedProduct = await productsModel.findByIdAndUpdate(id, req.body, {
			new: true,
		});

		res.status(200).json({ msg: 'successful update', data: updatedProduct });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Contact to admin' });
	}
};
const deleteProduct = async (req, res) => {
	const { id } = req.params;
	try {
		let foundProduct = await productsModel.findById(id);
		if (!foundProduct) {
			return res.status(404).json({ msg: 'Product not found' });
		}
		await productsModel.findByIdAndRemove(id);
		res.status(200).json({ msg: 'successful delete' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Contact to admin' });
	}
};
module.exports = {
	uploadUsers,
	createProduct,
	getAllProducts,
	editProduct,
	deleteProduct,
};
