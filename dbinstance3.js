const mysql = require('mysql');

const insertthird = (tweetid, hash) => {
    const con = mysql.createConnection({
        host: "twitdemo-db-3-instance-1.csddg61e0wul.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "Csus2022",
        database: "main"
    });
    console.log(tweetid);
    console.log(JSON.stringify(hash));
    const data = JSON.stringify(hash);


    con.connect(function (err) {
        if (err) {
            console.log(err);
            return err;
        }
        console.log("connected");
        con.query(`INSERT INTO tweets (tweetid, encstring) VALUES ('${tweetid}', '${data}')`, function (err, result, fields) {
            if (err) {
                console.log(err);
                return err;
            }

            if (result) {
                console.log(result);
                return { 'tweetid': tweetid, 'hash': hash }
            };
            if (fields) console.log(fields);
            return tweetid;
        });
    });
}

const getrecordsbyid = tweetid => {
    const con = mysql.createConnection({
        host: "twitdemo-db-3-instance-1.csddg61e0wul.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "Csus2022",
        database: "main"
    });
    con.connect(err => {
        if (err) {
            console.log(err);
            throw err;
        }
        con.query(`select * from tweets where tweetid='${tweetid}'`, (err, result, fields) => {
            if (err) throw err;
            return result;
        })
    });

}

module.exports = { insertthird, getrecordsbyid }