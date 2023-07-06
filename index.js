const express = require('express');
const routerAuth = require('./routes/auth');
const routerAdmin = require('./routes/admin');
const { dbConnection } = require('./database/config');
require('dotenv').config();
// crear el servidor express
const app = express();

dbConnection();

// directorio publico
app.use(express.static('public'));

// lectura y parseo de body requests
app.use(express.json());
// rutas
app.use('/auth', routerAuth);
app.use('/admin', routerAdmin);

app.listen(process.env.PORT, () => {
	console.log('Server listen in port ', process.env.PORT);
});
