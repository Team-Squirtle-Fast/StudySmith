const db = require('../models/dataModel.js')


module.exports = {

    // addSkills to database
    createSkill: (req, res, next) => {

        const {skillName, skillStatus, skillNotes} = req.body;
        const {username} = req.params;
        const query = 'INSERT INTO Skills (skill_name, skill_status, skill_notes, user_id) VALUES ($1, $2, $3, (SELECT user_id FROM Users WHERE username = $4)) RETURNING *;';

        db.query(query, [skillName, skillStatus, skillNotes, username])
            .then((data) => {
                console.log(data.rows[0].skill_id)
                res.locals.skill_id = data.rows[0].skill_id;
                return next();
            })
            .catch((err) => next({
                log: 'Express error handler caught in createSkill middleware function',
                message: { err }
            }))
    },

    // deleteSkills
    deleteSkill: (req, res, next) => {
        console.log(req.params)
        const { username, skill_id } = req.params;

        const query = 'DELETE FROM Skills WHERE skill_id = $1;';
        console.log(skill_id);
        
        db.query(query, [skill_id])
            .then(() => {
                res.locals.deleteSkill = 'Successful';
                return next();
            })
            .catch((err) => {
                res.locals.deleteSkill = 'Unsuccessful';
                return next({
                    log: 'Express error handler caught in deleteSkill middleware function',
                    message: { err }
                })
            })
    },

    // updateSkills
    updateSkill: (req, res, next) => {
        const {skillName, skillStatus, skillNotes} = req.body;
        const { skill_id } = req.params;

        const query = 'UPDATE Skills SET skill_name = $1, skill_status = $2, skill_notes = $3 WHERE skill_id = $4;';

        db.query(query, [skillName, skillStatus, skillNotes, skill_id])
            .then(() => {
                res.locals.updateSkill = 'Successful';
                return next();
            })
            .catch((err) => {
                res.locals.updateSkill = 'Unsuccessful';
                return next({
                    log: 'Express error handler caught in updateSkill middleware function',
                    message: { err }
                })
            })

    }
}