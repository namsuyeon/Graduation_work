const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : 'skatndus99',
    port : 3306,
    database:'real_movie',
})
db.connect();

module.exports = db;