// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "asap0921",
  database: "burgers"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;