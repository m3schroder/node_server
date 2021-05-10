var express = require("express");
const session = require("express-session");
var app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Keep it secret",
    name: "uniqueSessionID",
    saveUninitialized: false,
    resave: false,
  })
);
app.use("/", require("./routes/home.js"));
app.use(
  "/user",
  require("./middleware/authenticate"),
  require("./routes/user.js")
);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
