const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: "db-1.csddg61e0wul.us-east-1.rds.amazonaws.com",
//     user: "admin",
//     password: "Csus2022",

// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("database-1 Connected!");
//     con.query('CREATE DATABASE IF NOT EXISTS tweetdb1;');
//     console.log("Created DB tweetdb1");
//     con.query('USE tweetdb1;');
//     console.log("Use tweetdb1");
//     con.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
//         console.log(result);
//     });
//     con.end();
// });

// const con1 = mysql.createConnection({
//     host: "database-2.csddg61e0wul.us-east-1.rds.amazonaws.com",
//     user: "admin",
//     password: "Csus2022",

// });

// con1.connect(function (err) {
//     if (err) throw err;
//     console.log("database-2 Connected!");
//     con1.query('CREATE DATABASE IF NOT EXISTS tweetdb2;');
//     console.log("Created DB tweetdb2");
//     con1.query('USE tweetdb2;');
//     console.log("Use tweetdb2");
//     con1.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
//         console.log(result);
//     });
//     con1.end();
// });

// const con2 = mysql.createConnection({
//     host: "database-3.csddg61e0wul.us-east-1.rds.amazonaws.com",
//     user: "admin",
//     password: "Csus2022",

// });

// con2.connect(function (err) {
//     if (err) throw err;
//     console.log("database-3 Connected!");
//     con2.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
//     console.log("Created DB tweetdb3");
//     con2.query('USE tweetdb3;');
//     console.log("Use tweetdb3");
//     con2.query('CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));', function (error, result, fields) {
//         console.log(result);
//     });
//     con2.end();
// });

const con3 = mysql.createConnection({
  host: 'database-4.csddg61e0wul.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Csus2022',
});

con3.connect(function (err) {
  if (err) throw err;
  console.log('database-4 Connected!');
  con3.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
  console.log('Created DB tweetdb3');
  con3.query('USE tweetdb3;');
  console.log('Use tweetdb3');
  con3.query(
    'CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));',
    function (error, result, fields) {
      console.log(result);
    }
  );
  con3.end();
});

const con4 = mysql.createConnection({
  host: 'database-5.csddg61e0wul.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Csus2022',
});

con4.connect(function (err) {
  if (err) throw err;
  console.log('database-5 Connected!');
  con4.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
  console.log('Created DB tweetdb3');
  con4.query('USE tweetdb3;');
  console.log('Use tweetdb3');
  con4.query(
    'CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));',
    function (error, result, fields) {
      console.log(result);
    }
  );
  con4.end();
});

const con5 = mysql.createConnection({
  host: 'database-6.csddg61e0wul.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Csus2022',
});

con5.connect(function (err) {
  if (err) throw err;
  console.log('database-6 Connected!');
  con5.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
  console.log('Created DB tweetdb3');
  con5.query('USE tweetdb3;');
  console.log('Use tweetdb3');
  con5.query(
    'CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));',
    function (error, result, fields) {
      console.log(result);
    }
  );
  con5.end();
});

const con6 = mysql.createConnection({
  host: 'database-7.csddg61e0wul.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Csus2022',
});

con6.connect(function (err) {
  if (err) throw err;
  console.log('database-7 Connected!');
  con6.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
  console.log('Created DB tweetdb3');
  con6.query('USE tweetdb3;');
  console.log('Use tweetdb3');
  con6.query(
    'CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));',
    function (error, result, fields) {
      console.log(result);
    }
  );
  con6.end();
});

const con7 = mysql.createConnection({
  host: 'database-8.csddg61e0wul.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Csus2022',
});

con7.connect(function (err) {
  if (err) throw err;
  console.log('database-8 Connected!');
  con7.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
  console.log('Created DB tweetdb3');
  con7.query('USE tweetdb3;');
  console.log('Use tweetdb3');
  con7.query(
    'CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));',
    function (error, result, fields) {
      console.log(result);
    }
  );
  con7.end();
});

const con8 = mysql.createConnection({
  host: 'database-9.csddg61e0wul.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Csus2022',
});

con8.connect(function (err) {
  if (err) throw err;
  console.log('database-9 Connected!');
  con8.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
  console.log('Created DB tweetdb3');
  con8.query('USE tweetdb3;');
  console.log('Use tweetdb3');
  con8.query(
    'CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));',
    function (error, result, fields) {
      console.log(result);
    }
  );
  con8.end();
});

const con9 = mysql.createConnection({
  host: 'database-10.csddg61e0wul.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Csus2022',
});

con9.connect(function (err) {
  if (err) throw err;
  console.log('database-10 Connected!');
  con9.query('CREATE DATABASE IF NOT EXISTS tweetdb3;');
  console.log('Created DB tweetdb3');
  con9.query('USE tweetdb3;');
  console.log('Use tweetdb3');
  con9.query(
    'CREATE TABLE IF NOT EXISTS tweets(id int NOT NULL AUTO_INCREMENT, tweetid varchar(255) NOT NULL, encstring varchar(10000), userid varchar(255), secretkey varchar(255), PRIMARY KEY(id));',
    function (error, result, fields) {
      console.log(result);
    }
  );
  con9.end();
});