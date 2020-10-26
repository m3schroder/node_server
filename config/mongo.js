require('dotenv').config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.ATLAS_URI, {useUnifiedTopology: true});

module.exports = client;
