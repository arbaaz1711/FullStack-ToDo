const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete', // db means our schema
    password: 'root',
});

module.exports = pool.promise();
