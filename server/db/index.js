//Establish connection with our cloud mongo server

const mongoose = require("mongoose");
//Set debugger to monitor CRUD operations
mongoose.set("debug", true);

//Ask me for the connection string. Email me at antoniorivera.cs18@gmail.com
const connectionString = "";

//Connect database to our mongo server, default port and db name passed to the URI
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) //if not created, create and connect
  .catch((e) => {
    console.error("Connection error: ", e.message);
  });
//Error is thrown if connection is unsuccessful

//cursor to access mongo database
const db = mongoose.connection;

//Export so other files can access the database manager
module.exports = db;
