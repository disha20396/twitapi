const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { encrypt, decrypt, getuuid } = require('./crypto');
const { getIndex } = require('./indexgeneration');
const { getPartitionedTweet } = require('./tweetpartition')
const { insertfirst, insertsecond, insertthird, gettweetfirst, gettweetsecond, gettweetthird } = require('./CRUD');
const { splitArray, splitToChunks } = require('./common');
const dbConn = require('./DBInstance')


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/tweet", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);

});

app.post("/enctweet", (req, res, next) => {
    const body = req.body;
    const tweet = body.tweet;
    const userid = body.userid;
    const tweetLength = tweet.length;
    const numberofpartitions = 3;
    const index = getIndex(tweetLength, numberofpartitions)

    const partitionedtweet = getPartitionedTweet(index, tweet);

    const ensStringList = [];

    for (let i = 0; i < partitionedtweet.length; i++) {
        const str = partitionedtweet[i];

        const encstr = encrypt(str);

        ensStringList.push(encstr);
    }

    const tweetid = getuuid();
    if (numberofpartitions == 3) {
        insertfirst(tweetid, ensStringList[0], userid);
        insertsecond(tweetid, ensStringList[1], userid);
        insertthird(tweetid, ensStringList[2], userid);
    }
    else {
        const arr = splitToChunks(ensStringList, 3);
        console.log(arr);
        for (let i = 0; i < arr[0].length; i++) {
            insertfirst(tweetid, arr[0][i], userid);
        }
        for (let i = 0; i < arr[1].length; i++) {
            insertsecond(tweetid, arr[1][i], userid);
        }
        for (let i = 0; i < arr[2].length; i++) {
            insertthird(tweetid, arr[2][i], userid);
        }

    }

    res.json({ "tweetid": tweetid });
});

app.post("/dectweet", async (req, res, next) => {
    const body = req.body;
    const tweetid = body.tweetid;
    const strarr = [];

    dbConn.query(`SELECT id, encstring FROM tweetdb1.tweets WHERE tweetid='${tweetid}' ORDER BY id`, (err, results) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            Object.keys(results).forEach(key => {
                var row = results[key];
                strarr.push(JSON.parse(row.encstring));
            });
        }
        dbConn.query(`SELECT id, encstring FROM tweetdb2.tweets WHERE tweetid='${tweetid}' ORDER BY id`, (err1, results1) => {
            if (err1) {
                console.log(err1);
                return "error";
            }
            else {
                Object.keys(results1).forEach(key => {
                    var row = results1[key];
                    strarr.push(JSON.parse(row.encstring));
                });
                dbConn.query(`SELECT id, encstring FROM tweetdb3.tweets WHERE tweetid='${tweetid}' ORDER BY id`, (err2, results2) => {
                    if (err2) {
                        console.log(err2);
                        return "error";
                    }
                    else {
                        Object.keys(results2).forEach(key => {
                            var row = results2[key];
                            strarr.push(JSON.parse(row.encstring));
                        });
                        let finstr = "";
                        const decryptionlist = [];
                        for (let i = 0; i < strarr.length; i++) {
                            finstr = finstr + decrypt(strarr[i]);
                        }

                        console.log(finstr);
                        res.send({ "tweet": finstr });
                    }
                });
            }
        });
    }
    );
});

app.post("/dectweetbyuid", (req, res, next) => {
    const body = req.body;
    const userid = body.userid;
    const strarr = [];
    const tweetidarry = [];
    dbConn.query(`SELECT id, tweetid, encstring FROM tweetdb1.tweets WHERE userid='${userid}' ORDER BY id`, (err, results) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            Object.keys(results).forEach(key => {
                var row = results[key];
                strarr.push({ "tweetid": row.tweetid, "encstring": JSON.parse(row.encstring) });
                if (!tweetidarry.includes(row.tweetid))
                    tweetidarry.push(row.tweetid);
            });
        }
        dbConn.query(`SELECT id, tweetid, encstring FROM tweetdb2.tweets WHERE userid='${userid}' ORDER BY id`, (err1, results1) => {
            if (err1) {
                console.log(err1);
                return "error";
            }
            else {
                Object.keys(results1).forEach(key => {
                    var row = results1[key];
                    strarr.push({ "tweetid": row.tweetid, "encstring": JSON.parse(row.encstring) });
                });
                dbConn.query(`SELECT id, tweetid, encstring FROM tweetdb3.tweets WHERE userid='${userid}' ORDER BY id`, (err2, results2) => {
                    if (err2) {
                        console.log(err2);
                        return "error";
                    }
                    else {
                        Object.keys(results2).forEach(key => {
                            var row = results2[key];
                            strarr.push({ "tweetid": row.tweetid, "encstring": JSON.parse(row.encstring) });
                        });
                        let finarr = [];
                        let finstr = "";
                        let tweetid = "";
                        for (let i = 0; i < tweetidarry.length; i++) {
                            finstr = "";
                            var filtered = []
                            filtered = strarr.filter(a => a.tweetid == tweetidarry[i]);

                            for (let j = 0; j < filtered.length; j++) {
                                finstr = finstr + decrypt(filtered[j].encstring);
                            }
                            finarr.push({ "tweetid": tweetidarry[i], "decrypttweet": finstr })
                        }

                        console.log(finarr);
                        res.send(finarr);
                    }
                });
            }
        });
    }
    );


})

app.get("/gettweet", (req, res, next) => {
    const body = req.body;
    const tweetid = body.tweetid;
    mysqlConnection.query('SELECT * FROM tweets WHERE tweetid = ?', [tweetid], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });

});
