const mongo = require("../config/mongoUtil");

async function getUserByEmail(email) {
  try {
    const database = mongo.getDb();
    const collection = database.collection("users");
    const query = { email: email };
    const options = {
      sort: { password: -1 },
      projection: { _id: 0, name: 1, email: 1, password: 1 },
    };
    const user = await collection.findOne(query);
    if (user) return user;
  } catch (e) {
    console.log("Catch an error: ", e);
  }
}

async function getUserById(id) {
  try {
    const database = mongo.getDb();
    const collection = database.collection("users");
    const query = { _id: id };
    const options = {
      sort: { password: -1 },
      projection: { _id: 0, name: 1, email: 1, password: 1 },
    };
    const user = await collection.findOne(query);
    return user;
  } catch (e) {
    console.log("Catch an error: ", e);
  }
}

async function registerUser(user) {
  try {
    const database = mongo.getDb();
    const collection = database.collection("users");
    const options = { ordered: true };
    const result = await collection.insertOne(user);

    console.log(`${result.insertedCount} document inserted`);
  } catch (e) {
    console.log("Catch an error: ", e);
  }
}

module.exports = { getUserByEmail, registerUser, getUserById };
