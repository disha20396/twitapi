const mysql = require("mysql");
const util = require("util");

const dbConn4 = mysql.createConnection({
  host: "database-4.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn4.query).bind(dbConn4);

dbConn4.connect(function (err) {
  if (err) throw err;
  console.log("Database 4 Connected!");
});

module.exports = dbConn4;
