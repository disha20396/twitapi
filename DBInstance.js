const mysql = require('mysql');
const util = require('util');



const dbConn = mysql.createConnection({
    host: 'database-1.csddg61e0wul.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Csus2022'
});

const query = util.promisify(dbConn.query).bind(dbConn);

dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});



module.exports = dbConn;