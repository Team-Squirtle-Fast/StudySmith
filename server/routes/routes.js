//require in needed packages
const express = require('express');
//declare and intialize the express router 
const router = express.Router();
//require in the middleware functions from the modular files
const { createAccount, login, loginSucess } = require('../controller/account_controller.js');
const { getLog } = require('../controller/log_controller.js');
const { createSkill, deleteSkill, updateSkill } = require('../controller/skills_controller.js');


//route for post request to signup/create an account
router.post('/signup', createAccount, (req, res) => {
    return res.status(200).json(res.locals.account);
});

//route to login in and fetch the data upon login
router.post('/login', login, loginSucess, (req,res) => {
    return res.status(200).json(res.locals.onLogin)
})

//route to make a get request for the all logs
router.get('/log/:username', getLog, (req,res) => {
    return res.status(200).json(res.locals.logsgot)
})
//route to make a post request for the daily log 
// router.post('/log/:username', newLog, (req,res) => {
//     return res.status(200).json()
// })

// route to create new skill to database
router.post('/skills/:username', createSkill, (req, res) => {
    return res.status(200).json(res.locals.skill_id)
})

// route to delete skill
router.delete('/skills/:username/:skill_id', deleteSkill, (req, res) => {
    return res.status(200).json(res.locals.deleteSkill)
})

// route to update skill
router.patch('/skills/:username/:skill_id', updateSkill, (req, res) => {
    return res.status(200).json(res.locals.updateSkill)
})



module.exports = router;
