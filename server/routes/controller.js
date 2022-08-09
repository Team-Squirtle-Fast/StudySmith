const express = require('express');
const router = express.Router();

const controller = require('');


router.post('/signup', controller.createAccount, (req, res) => {
    return res.send('successfully created new account');
});



module.exports = router;
