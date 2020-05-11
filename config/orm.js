var pool = require("../config/connection.js");
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
        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
          
            // Use the connection
            connection.query(queryString, function(error, result){
                if (error) {
                    console.log('error: ', error);
                    throw error;
                }
                connection.release();
                cb(result);
            });
           
          });
       
    },
    insertOne: function (tableName, colName, colVal, cb) {
        var queryString = `INSERT INTO ${tableName} (${colName}) VALUES ('${colVal}');`;
        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
          
            // Use the connection
            connection.query(queryString, function(error, result){
                if (error) {
                    console.log('error: ', error);
                    throw error;
                }
                connection.release();
                cb(result);
            });
           
          });
        // connection.query(queryString, function(err, result){
        //     if (err) {
        //         console.log('error: ', err);
        //         throw err;
        //     }
        //     cb(result);
        // });
    },
    updateOne: function (tableName, colObj, condition, cb) {
        //var queryString = `UPDATE ${tableName} SET ${colVal}=${boolean} WHERE ${colName}=${condition}`;
        var queryString = `UPDATE ${tableName} SET ${objToFormat(colObj)} WHERE ${condition};`
        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
          
            // Use the connection
            connection.query(queryString, function(error, result){
                if (error) {
                    console.log('error: ', error);
                    throw error;
                }
                connection.release();
                cb(result);
            });
           
          });
        // connection.query(queryString, function(err, result){
        //     if (err) {
        //         console.log('error: ', err);
        //         throw err;
        //     }
        //     cb(result);
        // });
    }
}

module.exports = orm;