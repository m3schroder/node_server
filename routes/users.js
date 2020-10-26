const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const wrap = require('../middleware/wrap');

//Find all
router.get('/', wrap(async (req,res)=> {
        let users = await User.find();
        res.send(JSON.stringify(users));
}));

//Find by name
router.get('/:name', wrap(async (req,res)=> {
        let users = await User.find(req.params.name);
        res.send(JSON.stringify(users));
}));

router.post('/', wrap(async (req,res)=> {
    let users = await User.insert(req.body);
   if(users != "undefined")
        res.send("Succesfully inserted user(s)")
    else
        res.send("Insert failed")
    res.send();
}));

module.exports = router;