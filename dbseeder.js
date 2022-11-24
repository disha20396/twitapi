const mysql = require("mysql");
const i = 10;

const con = mysql.createConnection({
  host: `database-${i}.csddg61e0wul.us-east-1.rds.amazonaws.com`,
  user: "admin",
  password: "Csus2022",
});

con.connect(function (err) {
  if (err) throw err;
  console.log(`database-${i} Connected!`);
  con.query(`CREATE DATABASE IF NOT EXISTS tweetdb${i};`);
  console.log(`Created DB tweetdb${i}`);
  con.query(`USE tweetdb${i};`);
  console.log(`Use tweetdb${i}`);
  con.query(
    "CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));",
    function (error, result, fields) {
      console.log(result);
    }
  );
  con.end();
});
