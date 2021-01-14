if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("./config/mongoUtil");
const session = require("express-session");
const passport = require("passport");

require("./config/passport")(passport);

//MIDDLEWARE
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", require("./routes/users"));

mongo.connectToServer(function (err, client) {
  if (err) console.log(err);
  app.listen(process.env.PORT);
});
