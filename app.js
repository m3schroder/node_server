var con = require('./config/db.js');

var sql = "INSERT INTO user (username, email, password) VALUES ('mataroni', 'm3schroder', 'guessthisisit')";
con.query( sql, function (error, results, fields) {
  if (error) throw error;
  console.log("Connected!");
  // connected!
});
