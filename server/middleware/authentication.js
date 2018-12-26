const jwt = require('jsonwebtoken');

const verificaToken = (req, res, next) => {
	const token = req.get('token');

	jwt.verify(token, process.env.SEED, (err, decode) => {
		if (err) {
			return res.status(401).json({
				ok: false,
				err: {
					message: 'token no ',
				},
			});
		}

		// decode es el payload enviado en el token

		req.usuario = decode.usuario;
		return next();
	});
};

module.exports = verificaToken;
