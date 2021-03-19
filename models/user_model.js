const con = require('../config/db.js');

const postUser = (username, email, password,callback) => {
try {
	var sql = "INSERT INTO user (username, email, password) VALUES (?, ? , ?)";
	con.query( sql, [username, email, password], function (e, results, fields) {
		if (e) throw e
		return callback(results)
	});
} catch (e) {
	console.log("There was an error posting new user: " + e)
	}
}

const getUsers = (callback) => {
try {
	var sql = "SELECT * FROM web_app.user"
	con.query(sql, function (e, results, fields) {
		if (e) throw e;
		return callback(results)
	});
} catch (e) {
	console.log("There was an error getting user data: " + e)
	}
}

module.exports = {postUser, getUsers}

