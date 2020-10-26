const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const wrap = require('../middleware/wrap');

router.get('/', wrap(async (req,res)=> {
        let users = await User.findAll();
        console.log(users);
        res.send();
}));

module.exports = router;