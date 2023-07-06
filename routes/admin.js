const { Router } = require('express');
const { check } = require('express-validator');
const createUser = require('../controllers/auth.controllers');

const routerAdmin = Router();

module.exports = routerAdmin;
