const mysql = require("mysql");
const util = require("util");

const dbConn7 = mysql.createConnection({
  host: "database-7.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn7.query).bind(dbConn7);

dbConn7.connect(function (err) {
  if (err) throw err;
  console.log("Database 7 Connected!");
});

module.exports = dbConn7;
