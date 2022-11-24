const mysql = require("mysql");
const util = require("util");

const dbConn6 = mysql.createConnection({
  host: "database-6.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn6.query).bind(dbConn6);

dbConn6.connect(function (err) {
  if (err) throw err;
  console.log("Database 6 Connected!");
});

module.exports = dbConn6;
