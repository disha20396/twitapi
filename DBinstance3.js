const mysql = require("mysql");
const util = require("util");

const dbConn3 = mysql.createConnection({
  host: "database-3.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn3.query).bind(dbConn3);

dbConn3.connect(function (err) {
  if (err) throw err;
  console.log("Database 3 Connected!");
});

module.exports = dbConn3;
