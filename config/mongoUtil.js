const { MongoClient, ObjectID } = require("mongodb");

let db;

module.exports = {
  connectToServer: async function (callback) {
    MongoClient.connect(
      process.env.ATLAS_URI,
      { useUnifiedTopology: true },
      function (err, client) {
        db = client.db("app_zero_db");
        return callback(err);
      }
    );
  },

  getDb: function () {
    return db;
  },
};
