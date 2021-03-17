var mysql = require('mysql');
var connection;

connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'matt',
  password : 'smallball',
  database : 'web_app'
});

module.exports = connection;
