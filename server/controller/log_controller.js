//need to require needed packages 
const { Pool } = require('pg');
//need to declare a connection string 
const connectionString = require('../models/dataModel');
//need to create a new pool instance passing in the connection string
const pool = new Pool({ connectionString });

//export the middleware functions
module.exports = {
  //now we want to write the middleware for the daily log get request and post request
  getLog: (req,res,next) => {
    //first we want to destructure getting the username from the req.params 
    const { username } = req.params;
    //we then want to make our query pulling all the logs where the username/userid 
    pool.query('SELECT * FROM Log WHERE user_id = (SELECT user_id FROM Users WHERE username = $1)', [username], (err,data) => {
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

}