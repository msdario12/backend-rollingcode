const { Router } = require('express');
const { check } = require('express-validator');
const {
	uploadUsers,
	createProduct,
	getAllProducts,
	editProduct,
	deleteProduct,
} = require('../controllers/admin.controllers');
const { validateJWT } = require('../middleware/validateJwt');

const routerAdmin = Router();

routerAdmin.get('/users', validateJWT, uploadUsers);

routerAdmin.post(
	'/products',
	validateJWT,
	check('name').notEmpty(),
	check('price').notEmpty(),
	check('description').notEmpty(),
	createProduct
);

routerAdmin.get('/products', validateJWT, getAllProducts);
routerAdmin.put('/products/:id', validateJWT, editProduct);
routerAdmin.delete('/products/:id', validateJWT, deleteProduct);
module.exports = routerAdmin;
