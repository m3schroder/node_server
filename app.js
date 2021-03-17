var mysql = require('mysql');

var con = mysql.createConnection({
  host: "45.79.253.178",
  user: "root",
  password: "Sma||ishba11z"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
