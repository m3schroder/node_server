const client = require('../config/mongo');

async function findAll() {
  try {
    await client.connect();

    const database = client.db("app_zero_db");
    const collection = database.collection("users");

    const query = { name: "Matt" };

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
  }finally {
    await client.close();
  }
}

module.exports = {findAll};