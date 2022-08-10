//need to require in the instance of the pool
const db = require('../models/dataModel.js')

//export the middleware functions
module.exports = {
  //now we want to write the middleware for the daily log get request and post request
  getLog: (req,res,next) => {
    //first we want to destructure getting the username from the req.params 
    const { username } = req.params;
    //we then want to make our query pulling all the logs where the username/userid 
    db.query('SELECT * FROM Log WHERE user_id = (SELECT user_id FROM Users WHERE username = $1)', [username], (err,data) => {
      if (err) {
        return next({
          log: 'Express error handler caught in getLog middleware function',
          message: { err }
        });
      } else {
        console.log(data.rows);
        res.locals.logsgot = data.rows;
        return next();
      }

    })
  },
  newLog: (req,res,next) => {
    //first we want to destructure getting the username from the req.params 
    const { username } = req.params;
    //we need to destructure the request body to get the log title and the log body 
    const {  log_title, log_body } = req.body
    //we then want to make our query inserting into the database 
    db.query('INSERT INTO Log (log_title, log_body, user_id) VALUES ($1, $2,(SELECT user_id FROM Users WHERE username = $3)) RETURNING *;', [log_title, log_body, username], (err,data) => {
      if (err) {
        return next({
          log: 'Express error handler caught in newLog middleware function',
          message: { err }
        });
      } else {
        //console.log(data.rows[0].log_id);
        res.locals.logId = data.rows[0].log_id;
        return next();
      }

    })
  },
  editLog: (req,res,next) => {
    //we want to destructure the params 
    const { username, logid } = req.params;
    //then we want to desructure the body 
    const { log_title, log_body } = req.body;
    //then we want to query the data base to update the log title and body where the log_id is equal to the param and the user_id is equal to the chain query of the user_id where the username equals the username request parameter
    db.query('UPDATE Log SET log_title = $1, log_body = $2 WHERE log_id = $3 AND user_id = (SELECT user_id FROM Users WHERE username = $4) RETURNING *;', [log_title, log_body, logid, username], (err,data) => {
      if(err) {
        res.locals.editLog = 'unsucessful'
        return next({
          log: 'Express error handler caught in editLog middleware function',
          message: { err }
        });
      }else{
        console.log(data.rows)
        res.locals.editLog = 'sucessful'
        next();
      }
    })

  }

}