//need to require needed packages 
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
//need to declare a connection string 
const connectionString = require('../models/dataModel');
//need to create a new pool instance passing in the connection string
const pool = new Pool({ connectionString });
//we want to declare a const of salt round to determine the amout of salt iterations
const saltRounds = 13;

module.exports = {
  //declare create acount middleware
  createAccount: (req,res,next) => {
    //first declare and destructure the req.body 
    //firstname, lastname, username, email, password
    const { firstName, lastName, username, email, password } = req.body;
    //declare an array that can be pushed into the query statement 
    const accArr = [firstName,lastName,username,email]
    //we need to send the password through bcrypt before inserting it into the data base
    bcrypt.hash(password, saltRounds, (err, hash) => {
      //we then push the hashed password into the array
      accArr.push(hash)
      //we insert the array into the query statment to add a user to the database
      pool.query('INSERT INTO Users(first_name,last_name, username, email, hash_password) VALUES($1,$2,$3,$4,$5)', accArr, (err,data) => {
        if(err) {
          //if error we want to send to front to be unsucessful
          res.locals.account = 'unsucessful'
          return next({
            log: 'Express error handler caught in createAccount middleware function',
            message: { err }
          });
        }else{
          //if we can add to database then we want to send to the front sucessful
          res.locals.account = 'sucessful'
          return next();
  
        }
    }) 

   })
  },
  login: (req,res,next) => {
    //first we want to desructure the request body
    const { username, password } = req.body;
    //then we want to query the database and pull the data that matches the username 
    pool.query('SELECT * FROM Users WHERE username = $1', [username], (err, user) => {
      if (err) {
        return next({
          log: 'Express error handler caught in login middleware function',
          message: { err }
        });
      } else {
       //we use this current query to assign the user id to a res.locals variable 
        res.locals.user = user.rows
        //res.locals.userId = data.rows
        //then we want to use bcrypt compare to compare the password given from the request and the hashed passwoed from the db
        bcrypt.compare(password, user.rows[0].hash_password, (err, result) => {
          res.locals.login = result;
          if (result === false){
            next({
              log:'Wrong username/password',
              message:{ err }
            })
          }else{
            return next();
          }
        })
      }
    })

  },
  //need a sucessful login middleware 
  loginSucess: (req,res,next) => {
    //we want to declare a user id variable here 
    const { first_name, user_id, last_name, email } = res.locals.user[0];
    //first we have a check if res.locals.login = true or false if false we need to set a conditional res.locals to either send unsucessful login or the query data
    if(res.locals.login === false){
      res.locals.loginres = 'unsucessful'
    }else{
      //first we declare the result object with the three properties tasks skills dailylog
      const result = {
        user:{
          firstName: first_name,
          lastName: last_name,
          email: email
        }
      }

      //first we will do the query statement to recieve the data for the tasks 
      pool.query('SELECT * FROM Tasks WHERE user_id = $1 ORDER BY due_date ASC', [user_id], (err,data) => {
        if (err) {
         return next({
            log: 'Express error handler caught in tasks query',
            message: { err }
          });
        } else {
          //then we want to splice and just get the first three elements from data.rows
          const recentThreeTask = data.rows.slice(0,3);
          // push that into the tasks value on the result object;
          result.tasks = recentThreeTask;
        }
      })
      //now we want to query the data base for skills we want to put out an array of objects of all skills 
      pool.query('SELECT * FROM Skills WHERE user_id = $1', [user_id], (err,data) => {
        if (err) {
          return next({
            log: 'Express error handler caught in skill query',
            message: { err }
          });
        } else {
          result.skills = data.rows;
        }
      })
      //now we want to query the dailylog
      pool.query('SELECT * FROM Log WHERE log_date = CURRENT_DATE AND user_id = $1', [user_id], (err,data) => {
        if (err) {
          return next({
            log: 'Express error handler caught in daily log query',
            message: { err }
          });
        } else {
          console.log(data.rows)
          if (!data.rows[0]) {
            result.dailyLog = [];
          }else{
            //now we want to add each of these values to the keys and add to the result object 
            result.dailyLog = {
              logId: data.rows[0].log_id,
              logTitle:data.rows[0].log_title,
              logBody:data.rows[0].log_body,
            }
           
          }
         //lastly reassign res.locals to be equal to results
         res.locals.onLogin = result;
         return next()
        }
      }); 
    };
  },

}
