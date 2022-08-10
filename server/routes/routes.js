//require in needed packages
const express = require('express');
//declare and intialize the express router 
const router = express.Router();
//require in the middleware functions
const { createAccount, login, loginSucess } = require('../controller/controller.js');
const { createSkill } = require('../controller/skills_controller.js');


//route for post request to signup/create an account
router.post('/signup', createAccount, (req, res) => {
    return res.status(200).json(res.locals.account);
});

//route to login in and fetch the data upon login
router.post('/login', login, loginSucess, (req,res) => {
    return res.status(200).json(res.locals.onLogin)
})

// route to post new skill to database
router.post('/skills/:username', createSkill, (req, res) => {
    return res.status(200).json(res.locals.user_id)
})

// route to delete skill
// route to update skill

module.exports = router;
