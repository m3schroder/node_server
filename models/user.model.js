const con = require('../config/db.js');

const postUser = (req, res) => {
try {
	var sql = "INSERT INTO user (username, email, password) VALUES (?, ? , ?)";
	con.query( sql, [user,email,password], function (e, results, fields) {
		if (e) throw e
		console.log(results)
	});
} catch (e) {
	console.log("There was an error posting new user" + e)
	}
}

const getUsers = (req, res) => {
try {
	var sql = "SELECT * FROM web_app.user"
	con.query(sql, function (e, results, fields) {
		if (e) throw e;
		res.json(results);
	});
} catch (e) {
	console.log("There was an error posting new user" + e)
	}
}

module.exports = {postUser, getUsers}

