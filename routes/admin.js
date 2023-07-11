const { Router } = require('express');
const { check } = require('express-validator');
const { uploadUsers } = require('../controllers/admin.controllers');

const routerAdmin = Router();

routerAdmin.get('/users', uploadUsers);

module.exports = routerAdmin;
