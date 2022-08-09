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
      pool.query('INSERT INTO "Users"("first_name","last_name", "username", "email", "hash_password") VALUES($1,$2,$3,$4,$5)', accArr, (err,data) => {
        if(err) {
          //if error we want to send to front to be unsucessful
          res.locals.account = 'unsucessful'
          next({
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
    const { username, password } = req.body
    //then we want to query the database and pull the data that matches the username 
    pool.query('SELECT * FROM "Users" WHERE "username" = $1', [username], (err, user) => {
      if (err) {
        next({
          log: 'Express error handler caught in login middleware function',
          message: { err }
        });
      } else {
        //then we want to use bcrypt compare to compare the password given from the request and the hashed passwoed from the db
        bcrypt.compare(password, user.rows[0].hash_password, (err, result) => {
          if (err){
            next({
              log:'Wrong password',
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
  loginSucess: (res,req,next) => {
    //we want the three most recent tasks that correspond with userid
    //we want all the skills with the corresponding userid 
    //we want to query for that dates daily log that correspond with user id
  }
}



//later we want to use bycrypt compare to compare plain text to the salted and hashed pass 
