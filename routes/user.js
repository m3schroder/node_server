const express = require('express')
const router = express.Router()
const userModel = require("../models/user_model")

router.get('/', function (req, res) {
	userModel.getUsers(function(result){
		res.json(result)
	})
})

router.post('/', function (req, res) {
	let {user, email, password} = req.body
	userModel.postUser(user, email, password, function(result){
		console.log(result)
		res.send("Its good I guess")
	})
})

module.exports = router
