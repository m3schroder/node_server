const express = require("express");
const bycrypt = require("bcrypt");
const router = express.Router();

const userModel = require("../models/user_model");
const wrap = require("../middleware/wrap");

router.post(
  "/delete",
  wrap(async (req, res, next) => {
    //Change these to pull from the session variables later
    let { username, password } = req.body;
    await userModel.findUser(username, async function (result) {
      if (result.length == 1) {
        const comparison = bycrypt.compare(
          password,
          String(result[0].password)
        );
        if (comparison) {
          await userModel.deleteUser(username, function (result) {
            console.log(result);
          });
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
  (req, res, next) => {
    console.log("\nDestroying", req.session);
    req.session.destroy((e) => {
      if (e) throw e;
    });
    res.send({
      code: 200,
      success: "User deleted",
    });
  }
);

router.post(
  "/update",
  wrap(async (req, res, next) => {
    //Change these to pull from the session variables later
    let { username, email } = req.body;
    await userModel.updateUser(username, email, async function (result) {
      console.log(result);
      if (result.changedRows > 0) {
        res.send({
          code: 200,
          success: "User updated",
        });
      } else {
        if (result.affectedRows == 1) {
          res.send({
            code: 204,
            error: "No update",
          });
        } else {
          res.send({
            code: 204,
            error: "No effect",
          });
        }
      }
    });
  })
);

router.get("/logout", (req, res) => {
  console.log("\nDestroying", req.session);
  req.session.destroy((e) => {
    if (e) throw e;
  });
});

module.exports = router;
