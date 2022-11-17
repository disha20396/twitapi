const mysql = require('mysql');
const util = require('util');



const dbConn2 = mysql.createConnection({
    host: 'database-2.csddg61e0wul.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Csus2022'
});

const query = util.promisify(dbConn2.query).bind(dbConn2);

dbConn2.connect(function (err) {
    if (err) throw err;
    console.log("Database 2 Connected!");
});



module.exports = dbConn2;