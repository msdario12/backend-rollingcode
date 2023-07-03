const express = require('express');
require('dotenv').config();
// crear el servidor express
const app = express();
app.listen(process.env.PORT, () => {
	console.log('Server listen in port ', process.env.PORT);
});
