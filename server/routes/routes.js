const express = require('express');
const router = express.Router();

const controller = require('../controller/controller.js');


router.post('/signup', controller.createAccount, (req, res) => {
    return res.status(200).json('successfully created new account');
});



module.exports = router;
