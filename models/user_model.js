const connection = require("../config/db.js");

//Posts new user
const postUser = (username, email, password, callback) => {
  try {
    var sql = "INSERT INTO user (username, email, password) VALUES (?, ? , ?)";
    connection.query(
      sql,
      [username, email, password],
      function (e, results, fields) {
        if (e) throw e;
        return callback(results);
      }
    );
  } catch (e) {
    console.log("There was an error posting new user: ?", e);
  }
};

const getUsers = (callback) => {
  try {
    var sql = "SELECT username, email FROM app_db.user";
    connection.query(sql, function (e, results, fields) {
      if (e) throw e;
      return callback(results);
    });
  } catch (e) {
    console.log("There was an error getting user data:\n ?", e);
  }
};

//Returns a single user
const findUser = (username, callback) => {
  try {
    var sql = "SELECT * FROM app_db.user WHERE username = ?";
    connection.query(sql, username, function (e, result, fields) {
      if (e) throw e;
      return callback(result);
    });
  } catch (e) {
    console.log("There was an error finding ?:\n ?", username, e);
  }
};

//Deletes user from database using username
const deleteUser = (username, callback) => {
  try {
    var sql = "DELETE FROM app_db.user WHERE username = ?";
    connection.query(sql, username, function (e, result, fields) {
      if (e) throw e;
      return callback(result);
    });
  } catch (e) {
    console.log("There was an error finding ?:\n ?", username, e);
  }
};

//Looks up user by username and updates email
const updateUser = (username, email, callback) => {
  try {
    var sql = "UPDATE user SET email = ?  WHERE username = ?";
    connection.query(sql, [email, username], function (e, result, fields) {
      if (e) throw e;
      return callback(result);
    });
  } catch (e) {
    console.log("There was an error finding ?:\n ?", username, e);
  }
};

module.exports = { postUser, getUsers, findUser, deleteUser, updateUser };
