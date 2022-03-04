const mariadb = require('mariadb');
require('dotenv').config();

const pools = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_KEY,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  multipleStatements: true,
  connectionLimit: process.env.DB_CNX_LIMIT,
});

exports.getConnection = () => {
  return new Promise(function (resolve, reject) {
    pools
      .getConnection()
      .then(function (db) {
        resolve(db);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
