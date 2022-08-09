//we want to require the needed packages
const express = require('express');
const path = require('path');
//we want to intialized an instance of express
const app = express();
//we want to declare a port for the application to listen on
const port = 3000;

const routes = require('./routes/controller.js')


//postgres://pzllqlln:E2fKwbQhwCUYMjXZul51bFBNu4HAfq0i@lallah.db.elephantsql.com/pzllqlln
//we are statically serving the files from the dist folder
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/controller', routes);



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