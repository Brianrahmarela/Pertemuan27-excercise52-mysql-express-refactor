const mysql = require('mysql2')

//buat koneksinya
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cashier",
});

module.exports = connection;