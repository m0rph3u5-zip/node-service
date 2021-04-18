"use strict";

const pool = require('../../mariadb/db');

exports.find = async (param) => {
	const sqlCode = `
		SELECT *
		FROM tb_comuni as c
		ORDER BY c.comune_id
		LIMIT ${param.skip},${param.limit}
	`;
	let conn = await pool.getConnection();
	const rows = await conn.query(sqlCode);
	conn.release();
	return rows;
}

