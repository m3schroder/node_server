const express = require('express')
const router = express.Router()
const userModel = require("../models/user.model")

router.get('/', function (req, res) {
	userModel.getUsers(req, res)
})

router.post('/', function (req, res) {
	userModel.postUser(req.body.user, 
					   req.body.email, 
					   req.body.password)
	res.send("User posted!")
})

module.exports = router
