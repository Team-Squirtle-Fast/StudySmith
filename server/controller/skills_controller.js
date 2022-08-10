const { Pool } = require('pg');
const connectionString = require('../models/dataModel');
const pool = new Pool({ connectionString });


module.exports = {

    // addSkills to database
    createSkill: (req, res, next) => {

        const {skillName, skillStatus, skillNotes} = req.body;
        const {username} = req.params;
        const query = `INSERT INTO Skills (skill_name, skill_status, skill_notes, user_id) VALUES ($1, $2, $3, (SELECT user_id FROM Users WHERE username = $4)) RETURNING *`

        pool.query(query, [skillName, skillStatus, skillNotes, username])
            .then((data) => {
            // console.log(data.rows[0].user_id)
            res.locals.user_id = data.rows[0].user_id;
            return next();
            })
            .catch((err) => next({
            log: 'Express error handler caught in createSkill middleware function',
            message: { err }
            }))
    },

    // deleteSkills

    // updateSkills

}