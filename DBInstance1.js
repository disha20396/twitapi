const mysql = require("mysql");
const util = require("util");

const dbConn1 = mysql.createConnection({
  host: "db-1.csddg61e0wul.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Csus2022",
});

const query = util.promisify(dbConn1.query).bind(dbConn1);

dbConn1.connect(function (err) {
  if (err) throw err;
  console.log("Database 1 Connected!");
});

module.exports = dbConn1;
