const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_CN);
		console.log('Successful connect to DB');
	} catch (error) {
		console.log(error);
	}
};

module.exports = { dbConnection };
