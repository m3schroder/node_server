const mongo = require('../config/mongoUtil');

async function find(name) {
  try {
    //await client.connect();

    //const database = client.db("app_zero_db");
    const database = mongo.getDb();
    const collection = database.collection("users");
    let query;

    if (name == null) {
       query = {}; 
    } else {
       query = {"name": name } 
    } 

    const options = {
      // sort matched documents in descending order by rating
      sort: { password: -1 },
      projection: { _id: 0, name: 1, email: 1, password: 1 },
    };

    const Cursor = await collection.find(query, options);

    if ((await Cursor.count()) === 0) {
      console.log("No documents found!");
    }

    let users = await Cursor.toArray();
    return users;
  } catch(e) {
      console.log("Catch an error: ", e)
  }
}

async function insert(users) {
  try {
    //await client.connect();

    //const database = client.db("app_zero_db");
    const database = mongo.getDb();
    const collection = database.collection("users");
   
    const options = {ordered: true, }
    const result = await collection.insertMany(users);

    console.log(
        `${result.insertedCount} documents were inserted`
    );
  } catch(e) {
      console.log("Catch an error: ", e)
  }
}

module.exports = {find,insert};