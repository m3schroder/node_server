const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const wrap = require("../middleware/wrap");
const passport = require("passport");
const bcrypt = require("bcrypt");

//Find by name
router.get(
  "/",
  wrap(async (req, res) => {
    let user = await User.getUserByEmail(req.body.email);
    console.log(user);
    if (user) res.send(JSON.stringify(user));
    else res.send("No user with that email");
  })
);

router.post(
  "/register",
  wrap(async (req, res) => {
    try {
      let { name, username, email, password } = req.body;
      let user = await {
        name: name,
        username: username,
        email: email,
        hashedPassword: bcrypt.hash(password, 10),
      };
      let result = await User.registerUser(user);
      console.log(user);
      res.send("Success");
    } catch (e) {
      console.log("Fail: ", e);
      res.send();
    }
  })
);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
