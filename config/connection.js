var mysql = require("mysql");

// Sets up the connection to the Burger database

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SQLmy123",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
