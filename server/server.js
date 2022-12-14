//we want to require the needed packages
const express = require('express');
const path = require('path');
//we want to intialized an instance of express
const app = express();
//we want to declare a port for the application to listen on
const port = 3000;

const routes = require('./routes/routes.js');
//we are statically serving the files from the dist folder
app.use(express.static(path.resolve(__dirname, '../dist')));
//require the controller to test in postman 
const { createAccount, postToData, login } = require('./controller/account_controller')
app.use(express.json())


app.use('/api', routes);


//local error handler 
app.use((req, res) => res.status(404).send('Page not Found'));
//global error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' }
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj);
  return res.status((errorObj.status)).json(errorObj.message);
});


//we focus the app to listen on the specific port and add a console.log to confirme its listening
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})