var express = require('express');
var app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', require('./routes/user.js'));

const server = app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running")
});

