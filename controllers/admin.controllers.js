const usersModel = require('../model/users-model');

const uploadUsers = async (req, res) => {
	console.log('Hi');
	try {
		const users = await usersModel.find();
		console.log(users);
		res.status(200).json({ msg: users });
	} catch (error) {
		console.log(error);
		res.status(500).send('Contact with admin');
	}
};

module.exports = { uploadUsers };
