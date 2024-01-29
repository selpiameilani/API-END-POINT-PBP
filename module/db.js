const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ',',
    database: mahasiswa
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting to mysql database:', err);
    } else {
        console.error('connected to mysql database');
    }
});

module.exports = connection;