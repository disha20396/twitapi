const mysql = require("mysql");
const util = require("util");

const dbConn8 = mysql.createConnection({
  host: "database-8.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn8.query).bind(dbConn8);

dbConn8.connect(function (err) {
  if (err) throw err;
  console.log("Database 8 Connected!");
});

module.exports = dbConn8;
