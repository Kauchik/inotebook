const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a User using: POST "/api/auth".Dosent require Auth
router.get('/',(req, res)=>{
    console.log(req.body);
    const User = User(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router