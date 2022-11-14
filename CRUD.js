
const dbConn = require('./DBInstance')


const insertfirst = (tweetid, hash) => {

    console.log(tweetid);
    console.log(JSON.stringify(hash));
    const data = JSON.stringify(hash);

    dbConn.query(`INSERT INTO tweetdb1.tweets (tweetid, encstring) VALUES ('${tweetid}', '${data}')`, (err, res) => {
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


const insertsecond = (tweetid, hash) => {
    console.log(tweetid);
    console.log(JSON.stringify(hash));
    const data = JSON.stringify(hash);

    dbConn.query(`INSERT INTO tweetdb2.tweets (tweetid, encstring) VALUES ('${tweetid}', '${data}')`, (err, res) => {
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

const insertthird = (tweetid, hash) => {
    console.log(tweetid);
    console.log(JSON.stringify(hash));
    const data = JSON.stringify(hash);

    dbConn.query(`INSERT INTO tweetdb3.tweets (tweetid, encstring) VALUES ('${tweetid}', '${data}')`, (err, res) => {
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

const gettweetfirst = async (tweetid) => {

    await dbConn.query(`SELECT encstring FROM tweetdb1.tweets WHERE tweetid='${tweetid}'`, (err, res) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            console.log(tweetid);
            return res
        }
    });
    // dbConn.query(`SELECT encstring FROM tweetdb1.tweets WHERE tweetid='${tweetid}'`, (err, res, fields) => {
    //     if (err) {
    //         console.log(err);
    //         return "error";
    //     }
    //     else {
    //         return res;
    //     }
    // });

}

const gettweetsecond = (tweetid) => {
    let result;
    dbConn.query(`SELECT encstring FROM tweetdb2.tweets WHERE tweetid='${tweetid}'`, (err, res) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            result = res;
        }
    });
    return result
}

const gettweetthird = (tweetid) => {

    dbConn.query(`SELECT encstring FROM tweetdb3.tweets WHERE tweetid='${tweetid}'`, (err, res) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            return res
        }
    });
}


module.exports = { insertfirst, insertsecond, insertthird, gettweetfirst, gettweetsecond, gettweetthird }