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
    const tweetLength = tweet.length;
    const numberofpartitions = 6;
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
        insertfirst(ensStringList[0]);
        insertsecond(ensStringList[1]);
        insertthird(ensStringList[2]);
    }
    else {
        const arr = splitToChunks(ensStringList, 3);
        console.log(arr);
        for (let i = 0; i < arr[0].length; i++) {
            insertfirst(tweetid, arr[0][i]);
        }
        for (let i = 0; i < arr[1].length; i++) {
            insertsecond(tweetid, arr[1][i]);
        }
        for (let i = 0; i < arr[2].length; i++) {
            insertthird(tweetid, arr[2][i]);
        }

    }

    res.json({ "tweetid": tweetid });
});

app.post("/dectweet", async (req, res, next) => {
    const body = req.body;
    const tweetid = body.tweetid;
    const strarr = [];

    let str = "";

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
                            finstr = finstr + decrypt(strarr[i]);;
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
