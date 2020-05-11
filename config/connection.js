var mysql = require("mysql");

var pool = mysql.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    port: 3306,
    user: "bb2e168b6b2b0e",
    password: "14ae5b98",
    database: "heroku_f202b1627ae847a"
});

module.exports = pool;