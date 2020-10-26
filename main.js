const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const {MongoClient, ObjectID} = require("mongodb");
app.use(bodyParser.json());

//ROUTES
const usersRoute = require("./routes/users");

//MIDDLEWARE
app.use('/api/users', usersRoute);

app.listen(process.env.PORT, () => console.log("Server Started"));