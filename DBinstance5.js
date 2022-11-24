const mysql = require("mysql");
const util = require("util");

const dbConn5 = mysql.createConnection({
  host: "database-5.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn5.query).bind(dbConn5);

dbConn5.connect(function (err) {
  if (err) throw err;
  console.log("Database 5 Connected!");
});

module.exports = dbConn5;
