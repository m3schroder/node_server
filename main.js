const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongo = require('./config/mongoUtil');

app.use(bodyParser.json());

//ROUTES
const usersRoute = require("./routes/users");

//MIDDLEWARE
app.use('/api/users', usersRoute);

mongo.connectToServer( function( err, client ) {
    if (err) console.log(err);
    app.listen(process.env.PORT);
} );
