const express = require("express");
const router = express.Router();
const bycrypt = require("bcrypt");

const userModel = require("../models/user_model");
const wrap = require("../middleware/wrap");

router.post(
  "/register",
  wrap(async (req, res, next) => {
    let { username, email, password } = req.body;
    const encrypted = await bycrypt.hash(password, 10);
    await userModel.postUser(username, email, encrypted, function (result) {
      res.send({ code: 200, success: "user registered successfully" });
    });
  })
);

router.post(
  "/login",
  wrap(async (req, res, next) => {
    let { username, password } = req.body;
    await userModel.findUser(username, function (result) {
      if (result.length > 0) {
        const comparison = bycrypt.compare(
          password,
          String(result[0].password)
        );
        if (comparison) {
          res.locals.username = username;
          next();
        } else {
          res.send({
            code: 204,
            error: "Username and password don't match",
          });
        }
      } else {
        res.send({
          code: 206,
          error: "Username does not exist",
        });
      }
    });
  }),
  (req, res) => {
    req.session.loggedIn = true;
    req.session.username = res.locals.username;
    console.log("\n Creating", req.session);
    res.send({
      code: 200,
      success: "login successful",
    });
  }
);

module.exports = router;
