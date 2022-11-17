
const dbConn1 = require('./DBInstance1')
const dbConn2 = require('./DBInstance2')
const dbConn3 = require('./DBInstance3')


const insertfirst = (tweetid, hash, userid, secretkey) => {

    console.log(tweetid);
    console.log(JSON.stringify(hash));
    const data = JSON.stringify(hash);

    dbConn1.query(`INSERT INTO tweetdb1.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`, (err, res) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            console.log(tweetid);
            return tweetid
        }
    });
}


const insertsecond = (tweetid, hash, userid, secretkey) => {
    console.log(tweetid);
    console.log(JSON.stringify(hash));
    const data = JSON.stringify(hash);

    dbConn2.query(`INSERT INTO tweetdb2.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`, (err, res) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            console.log(tweetid);
            return tweetid
        }
    });
}

const insertthird = (tweetid, hash, userid, secretkey) => {
    console.log(tweetid);
    console.log(JSON.stringify(hash));
    const data = JSON.stringify(hash);

    dbConn3.query(`INSERT INTO tweetdb3.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`, (err, res) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            console.log(tweetid);
            return tweetid
        }
    });
}


module.exports = { insertfirst, insertsecond, insertthird }