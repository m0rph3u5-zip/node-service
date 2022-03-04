"use strict";

const pool = require('../../mariadb/db');
let cnx; 

const initializeCnx = async () => {
	if (!cnx) {
		cnx = await pool.getConnection();
	}
}

exports.find = async (param) => {
	const sqlCode = `
		SELECT *
		FROM tb_comuni as c
		WHERE c.comune_descrizione LIKE '%${param.text}%'
		ORDER BY c.comune_id
		LIMIT ${param.skip},${param.limit}
	`;
	await initializeCnx();
	const rows = await cnx.query(sqlCode);
	cnx.release();
	cnx.end();
	return rows;
}

