const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const wrap = require('../middleware/wrap');

router.get('/', wrap(async (req,res)=> {
        let users = await User.find();
        res.send(JSON.stringify(users));
}));

router.get('/:name', wrap(async (req,res)=> {
        let users = await User.find(req.params.name);
        res.send(JSON.stringify(users));
}));

module.exports = router;