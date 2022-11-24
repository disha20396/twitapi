const mysql = require("mysql");
const util = require("util");

const dbConn9 = mysql.createConnection({
  host: "database-9.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn9.query).bind(dbConn9);

dbConn9.connect(function (err) {
  if (err) throw err;
  console.log("Database 9 Connected!");
});

module.exports = dbConn9;
