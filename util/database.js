const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'RAGE',
  password: 'swaraj128'
});

module.exports = pool.promise();