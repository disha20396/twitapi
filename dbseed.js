const mysql = require('mysql');

const con = mysql.createConnection({
    host: "db-1.csddg61e0wul.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Csus2022",

});

con.connect(function (err) {
    if (err) throw err;
    console.log("database-1 Connected!");
    con.query('CREATE DATABASE IF NOT EXISTS tweetdb1;');
    console.log("Created DB tweetdb1");
    con.query('USE tweetdb1;');
    console.log("Use tweetdb1");
    con.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
        console.log(result);
    });
    con.end();
});

const con1 = mysql.createConnection({
    host: "database-2.csddg61e0wul.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Csus2022",

});

con1.connect(function (err) {
    if (err) throw err;
    console.log("database-2 Connected!");
    con1.query('CREATE DATABASE IF NOT EXISTS tweetdb2;');
    console.log("Created DB tweetdb2");
    con1.query('USE tweetdb2;');
    console.log("Use tweetdb2");
    con1.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
        console.log(result);
    });
    con1.end();
});

const con2 = mysql.createConnection({
    host: "database-3.csddg61e0wul.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Csus2022",

});

con2.connect(function (err) {
    if (err) throw err;
    console.log("database-3 Connected!");
    con2.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
    console.log("Created DB tweetdb3");
    con2.query('USE tweetdb3;');
    console.log("Use tweetdb3");
    con2.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
        console.log(result);
    });
    con2.end();
});