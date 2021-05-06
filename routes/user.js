const express = require("express");
const router = express.Router();
const userModel = require("../models/user_model");
const ash = require("express-async-handler");

router.get(
  "/",
  ash(async (req, res, next) => {
    await userModel.getUsers(function (result) {
      res.json(result);
    });
  })
);

router.post(
  "/",
  ash(async (req, res, next) => {
    let { username, email, password } = req.body;
    await userModel.postUser(username, email, password, function (result) {
      console.log(result);
      res.send("Its good I guess");
    });
  })
);

module.exports = router;
