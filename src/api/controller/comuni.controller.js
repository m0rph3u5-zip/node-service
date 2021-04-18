const comuniManager = require('../manager/comuni.manager');
const statusCode = require('../../utility/status-code');

exports.find = async (req, res) => {
	const request = req.body;
	if (request) {
		if (!request.skip) { request.skip = 0 }
		if (!request.limit) { request.limit = 20 }
	}
	try {
		const comuniList = await comuniManager.find(request);
		res.send(comuniList);
	} catch (error) {
		statusCode.internalServerError(res, error);
	}
}

exports.root = async (req, res) => {
	res.send('Servizio attivo');
};
