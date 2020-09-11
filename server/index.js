const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

//Import connection to database
const db = require('./db')

//Import routes for express to use
const routes = require('./routes/apiRouter')

//Basic middleware usage to access data from requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

//Set an event listener to respond to errors with connection
//Since server/index.js is the main controller its important to log fundamental errors like database connections here at server/index.js
db.on('error', console.error.bind(console, 'MongoDB connection error!'));

//Check if connection was succesful. This is a listener responding to the event 'open'.
db.once("open", function() {
    console.log("Connection Successful!");
  });


//Test server
app.get('/', (req,res) => {
    res.send('Hello server')
});


//Put our routes in use
app.use('/api', routes)

//Set up the server
app.listen(PORT, () => {console.log("Listening on port " + PORT)});