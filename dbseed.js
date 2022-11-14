const mysql = require('mysql');

const con = mysql.createConnection({
    host: "database-1.csddg61e0wul.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Csus2022",

});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('CREATE DATABASE IF NOT EXISTS tweetdb1;');
    console.log("Created DB tweetdb1");
    con.query('USE tweetdb1;');
    console.log("Use tweetdb1");
    con.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
        console.log(result);
    });
    con.query('CREATE DATABASE IF NOT EXISTS tweetdb2;');
    console.log("Created DB tweetdb2");
    con.query('USE tweetdb2;');
    console.log("Use tweetdb2");
    con.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
        console.log(result);
    });
    con.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
    console.log("Created DB tweetdb3");
    con.query('USE tweetdb3;');
    console.log("Use tweetdb3");
    con.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
        console.log(result);
    });
    console.log("Create table");
    con.end();
});