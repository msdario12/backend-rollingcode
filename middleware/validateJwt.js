const express = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
	// x-token por Headers

	const token = req.header('x-token');

	if (!token) {
		return res.status(401).json({
			msg: 'Token not found',
		});
	}

	try {
		const payload = jwt.verify(token, process.env.SECRET_JWT);
		console.log(payload);
	} catch (error) {
		console.log(error);
		return res.status(401).json({
			msg: 'Invalid Token',
		});
	}

	next();
};

module.exports = {
	validateJWT,
};
