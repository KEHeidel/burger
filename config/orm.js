var connection = require("../config/connection.js");
function objToFormat(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableName, colName, colVal, cb) {
        var queryString = `INSERT INTO ${tableName} (${colName}) VALUES ('${colVal}');`;
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (tableName, colObj, condition, cb) {
        //var queryString = `UPDATE ${tableName} SET ${colVal}=${boolean} WHERE ${colName}=${condition}`;
        var queryString = `UPDATE ${tableName} SET ${objToFormat(colObj)} WHERE ${condition};`
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;