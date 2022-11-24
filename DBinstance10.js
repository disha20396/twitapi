const mysql = require("mysql");
const util = require("util");

const dbConn10 = mysql.createConnection({
  host: "database-10.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn10.query).bind(dbConn10);

dbConn10.connect(function (err) {
  if (err) throw err;
  console.log("Database 10 Connected!");
});

module.exports = dbConn10;
