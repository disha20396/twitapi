const express = require("express");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { encrypt, decrypt, getuuid } = require('./crypto');
const { getIndex } = require('./indexgeneration');
const { getPartitionedTweet } = require('./tweetpartition')
const { insertfirst, insertsecond, insertthird } = require('./CRUD');
const { splitArray, splitToChunks } = require('./common');
const dbConn1 = require('./DBInstance1')
const dbConn2 = require('./DBInstance2')
const dbConn3 = require('./DBInstance3')


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
    const numberofpartitions = body.numberofpartitions; // Change partitions
    const index = getIndex(tweetLength, numberofpartitions)

    const partitionedtweet = getPartitionedTweet(index, tweet);

    const ensStringList = [];
    const secretKey = getuuid().replace(/-/gi, '');

    for (let i = 0; i < partitionedtweet.length; i++) {
        const str = partitionedtweet[i];

        const encstr = encrypt(str, secretKey);

        ensStringList.push(encstr);
    }

    const tweetid = getuuid();
    if (numberofpartitions == 3) {
        insertfirst(tweetid, ensStringList[0], userid, secretKey);
        insertsecond(tweetid, ensStringList[1], userid, secretKey);
        insertthird(tweetid, ensStringList[2], userid, secretKey);
    }
    else {
        const arr = splitToChunks(ensStringList, 3);
        console.log(arr);
        for (let i = 0; i < arr[0].length; i++) {
            insertfirst(tweetid, arr[0][i], userid, secretKey);
        }
        for (let i = 0; i < arr[1].length; i++) {
            insertsecond(tweetid, arr[1][i], userid, secretKey);
        }
        for (let i = 0; i < arr[2].length; i++) {
            insertthird(tweetid, arr[2][i], userid, secretKey);
        }

    }

    res.json({ "tweetid": tweetid });
});

app.post("/dectweet", async (req, res, next) => {
    const body = req.body;
    const tweetid = body.tweetid;
    const strarr = [];
    let secretKey = "";

    dbConn1.query(`SELECT id, encstring, secretkey FROM tweetdb1.tweets WHERE tweetid='${tweetid}' ORDER BY id`, (err, results) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            Object.keys(results).forEach(key => {
                const row = results[key];
                secretKey = row.secretkey;
                strarr.push(JSON.parse(row.encstring));
            });
        }
        dbConn2.query(`SELECT id, encstring FROM tweetdb2.tweets WHERE tweetid='${tweetid}' ORDER BY id`, (err1, results1) => {
            if (err1) {
                console.log(err1);
                return "error";
            }
            else {
                Object.keys(results1).forEach(key => {
                    const row = results1[key];
                    strarr.push(JSON.parse(row.encstring));
                });
                dbConn3.query(`SELECT id, encstring FROM tweetdb3.tweets WHERE tweetid='${tweetid}' ORDER BY id`, (err2, results2) => {
                    if (err2) {
                        console.log(err2);
                        return "error";
                    }
                    else {
                        Object.keys(results2).forEach(key => {
                            const row = results2[key];
                            strarr.push(JSON.parse(row.encstring));
                        });
                        let finstr = "";
                        const decryptionlist = [];
                        for (let i = 0; i < strarr.length; i++) {
                            finstr = finstr + decrypt(strarr[i], secretKey);
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

    dbConn1.query(`SELECT id, tweetid, encstring, secretkey FROM tweetdb1.tweets WHERE userid='${userid}' ORDER BY id`, (err, results) => {
        if (err) {
            console.log(err);
            return "error";
        }
        else {
            Object.keys(results).forEach(key => {
                var row = results[key];
                strarr.push({ "tweetid": row.tweetid, "encstring": JSON.parse(row.encstring) });
                if (!tweetidarry.includes(row.tweetid))
                    tweetidarry.push({ tweetid: row.tweetid, secretKey: row.secretkey });
            });
        }
        dbConn2.query(`SELECT id, tweetid, encstring FROM tweetdb2.tweets WHERE userid='${userid}' ORDER BY id`, (err1, results1) => {
            if (err1) {
                console.log(err1);
                return "error";
            }
            else {
                Object.keys(results1).forEach(key => {
                    var row = results1[key];
                    strarr.push({ "tweetid": row.tweetid, "encstring": JSON.parse(row.encstring) });
                });
                dbConn3.query(`SELECT id, tweetid, encstring FROM tweetdb3.tweets WHERE userid='${userid}' ORDER BY id`, (err2, results2) => {
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
                            filtered = strarr.filter(a => a.tweetid == tweetidarry[i].tweetid);
                            let secretKey = tweetidarry[i].secretKey;

                            for (let j = 0; j < filtered.length; j++) {
                                finstr = finstr + decrypt(filtered[j].encstring, secretKey);
                            }
                            finarr.push({ "tweetid": tweetidarry[i].tweetid, "decrypttweet": finstr })
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
