const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { encrypt, decrypt, getuuid } = require("./crypto");
const { getIndex } = require("./indexgeneration");
const { getPartitionedTweet } = require("./tweetpartition");
const {
  insertfirst,
  insertsecond,
  insertthird,
  insertforth,
  insertfifth,
  insertsixth,
  insertseventh,
  inserteight,
  insertninth,
  inserttenth,
} = require("./CRUD");
const { splitArray, splitToChunks } = require("./common");
const dbConn1 = require("./DBInstance1");
const dbConn2 = require("./DBInstance2");
const dbConn3 = require("./DB3");
const dbConn4 = require("./DB4");
const dbConn5 = require("./DB5");
const dbConn6 = require("./DB6");
const dbConn7 = require("./DB7");
const dbConn8 = require("./DB8");
const dbConn9 = require("./DB9");
const dbConn10 = require("./DB10");

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
  const index = getIndex(tweetLength, numberofpartitions);

  const partitionedtweet = getPartitionedTweet(index, tweet);

  const ensStringList = [];
  const secretKey = getuuid().replace(/-/gi, "");
  const tweetid = getuuid();
  for (let i = 0; i < partitionedtweet.length; i++) {
    const str = partitionedtweet[i];

    const encstr = encrypt(str, secretKey);

    switch (i) {
      case 0:
        insertfirst(tweetid, encstr, userid, secretKey);
        break;
      case 1:
        insertsecond(tweetid, encstr, userid, secretKey);
        break;
      case 2:
        insertthird(tweetid, encstr, userid, secretKey);
        break;
      case 3:
        insertforth(tweetid, encstr, userid, secretKey);
        break;
      case 4:
        insertfifth(tweetid, encstr, userid, secretKey);
        break;
      case 5:
        insertsixth(tweetid, encstr, userid, secretKey);
        break;
      case 6:
        insertseventh(tweetid, encstr, userid, secretKey);
        break;
      case 7:
        inserteight(tweetid, encstr, userid, secretKey);
        break;
      case 8:
        insertninth(tweetid, encstr, userid, secretKey);
        break;
      case 9:
        inserttenth(tweetid, encstr, userid, secretKey);
        break;
    }

    ensStringList.push(encstr);
  }

  //   if (numberofpartitions == 3) {
  //     insertfirst(tweetid, ensStringList[0], userid, secretKey);
  //     insertsecond(tweetid, ensStringList[1], userid, secretKey);
  //     insertthird(tweetid, ensStringList[2], userid, secretKey);
  //   } else {
  //     const arr = splitToChunks(ensStringList, 3);
  //     console.log(arr);
  //     for (let i = 0; i < arr[0].length; i++) {
  //       insertfirst(tweetid, arr[0][i], userid, secretKey);
  //     }
  //     for (let i = 0; i < arr[1].length; i++) {
  //       insertsecond(tweetid, arr[1][i], userid, secretKey);
  //     }
  //     for (let i = 0; i < arr[2].length; i++) {
  //       insertthird(tweetid, arr[2][i], userid, secretKey);
  //     }
  //   }

  res.json({ tweetid: tweetid });
});

app.post("/dectweet", async (req, res, next) => {
  const body = req.body;
  const tweetid = body.tweetid;
  const strarr = [];
  let secretKey = "";
  console.log(tweetid);
  dbConn1.query(
    `SELECT id, encstring, secretkey FROM tweetdb1.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
    (err, results) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        Object.keys(results).forEach((key) => {
          const row = results[key];
          secretKey = row.secretkey;
          strarr.push(JSON.parse(row.encstring));
        });
      }
      dbConn2.query(
        `SELECT id, encstring FROM tweetdb2.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
        (err1, results1) => {
          if (err1) {
            console.log(err1);
            return "error";
          } else {
            Object.keys(results1).forEach((key) => {
              const row = results1[key];
              strarr.push(JSON.parse(row.encstring));
            });
            dbConn3.query(
              `SELECT id, encstring FROM tweetdb3.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
              (err2, results2) => {
                if (err2) {
                  console.log(err2);
                  return "error";
                } else {
                  Object.keys(results2).forEach((key) => {
                    const row = results2[key];
                    strarr.push(JSON.parse(row.encstring));
                  });
                  dbConn4.query(
                    `SELECT id, encstring FROM tweetdb4.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
                    (err3, results3) => {
                      if (err3) {
                        console.log(err3);
                        return "error";
                      } else {
                        Object.keys(results3).forEach((key) => {
                          const row = results3[key];
                          strarr.push(JSON.parse(row.encstring));
                        });

                        dbConn5.query(
                          `SELECT id, encstring FROM tweetdb5.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
                          (err4, results4) => {
                            if (err4) {
                              console.log(err4);
                              return "error";
                            } else {
                              Object.keys(results4).forEach((key) => {
                                const row = results4[key];
                                strarr.push(JSON.parse(row.encstring));
                              });
                              dbConn6.query(
                                `SELECT id, encstring FROM tweetdb6.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
                                (err5, results5) => {
                                  if (err5) {
                                    console.log(err5);
                                    return "error";
                                  } else {
                                    Object.keys(results5).forEach((key) => {
                                      const row = results5[key];
                                      strarr.push(JSON.parse(row.encstring));
                                    });
                                    dbConn7.query(
                                      `SELECT id, encstring FROM tweetdb7.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
                                      (err6, results6) => {
                                        if (err6) {
                                          console.log(err6);
                                          return "error";
                                        } else {
                                          Object.keys(results6).forEach(
                                            (key) => {
                                              const row = results6[key];
                                              strarr.push(
                                                JSON.parse(row.encstring)
                                              );
                                            }
                                          );
                                          dbConn8.query(
                                            `SELECT id, encstring FROM tweetdb8.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
                                            (err7, results7) => {
                                              if (err7) {
                                                console.log(err7);
                                                return "error";
                                              } else {
                                                Object.keys(results7).forEach(
                                                  (key) => {
                                                    const row = results7[key];
                                                    strarr.push(
                                                      JSON.parse(row.encstring)
                                                    );
                                                  }
                                                );
                                                dbConn9.query(
                                                  `SELECT id, encstring FROM tweetdb9.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
                                                  (err8, results8) => {
                                                    if (err8) {
                                                      console.log(err8);
                                                      return "error";
                                                    } else {
                                                      Object.keys(
                                                        results8
                                                      ).forEach((key) => {
                                                        const row =
                                                          results8[key];
                                                        strarr.push(
                                                          JSON.parse(
                                                            row.encstring
                                                          )
                                                        );
                                                      });
                                                      dbConn10.query(
                                                        `SELECT id, encstring FROM tweetdb10.tweets WHERE tweetid='${tweetid}' ORDER BY id`,
                                                        (err9, results9) => {
                                                          if (err9) {
                                                            console.log(err9);
                                                            return "error";
                                                          } else {
                                                            Object.keys(
                                                              results9
                                                            ).forEach((key) => {
                                                              const row =
                                                                results9[key];
                                                              strarr.push(
                                                                JSON.parse(
                                                                  row.encstring
                                                                )
                                                              );
                                                            });
                                                            let finstr = "";
                                                            for (
                                                              let i = 0;
                                                              i < strarr.length;
                                                              i++
                                                            ) {
                                                              finstr =
                                                                finstr +
                                                                decrypt(
                                                                  strarr[i],
                                                                  secretKey
                                                                );
                                                            }

                                                            console.log(finstr);
                                                            res.send({
                                                              tweet: finstr,
                                                            });
                                                          }
                                                        }
                                                      );
                                                    }
                                                  }
                                                );
                                              }
                                            }
                                          );
                                        }
                                      }
                                    );
                                  }
                                }
                              );
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  );
});

app.post("/dectweetbyuid", (req, res, next) => {
  const body = req.body;
  const userid = body.userid;
  const strarr = [];
  const tweetidarry = [];

  dbConn1.query(
    `SELECT id, tweetid, encstring, secretkey FROM tweetdb1.tweets WHERE userid='${userid}' ORDER BY id`,
    (err, results) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        Object.keys(results).forEach((key) => {
          var row = results[key];
          strarr.push({
            tweetid: row.tweetid,
            encstring: JSON.parse(row.encstring),
          });
          if (!tweetidarry.includes(row.tweetid))
            tweetidarry.push({
              tweetid: row.tweetid,
              secretKey: row.secretkey,
            });
        });
      }
      dbConn2.query(
        `SELECT id, tweetid, encstring FROM tweetdb2.tweets WHERE userid='${userid}' ORDER BY id`,
        (err1, results1) => {
          if (err1) {
            console.log(err1);
            return "error";
          } else {
            Object.keys(results1).forEach((key) => {
              var row = results1[key];
              strarr.push({
                tweetid: row.tweetid,
                encstring: JSON.parse(row.encstring),
              });
            });
            dbConn3.query(
              `SELECT id, tweetid, encstring FROM tweetdb3.tweets WHERE userid='${userid}' ORDER BY id`,
              (err2, results2) => {
                if (err2) {
                  console.log(err2);
                  return "error";
                } else {
                  Object.keys(results2).forEach((key) => {
                    var row = results2[key];
                    strarr.push({
                      tweetid: row.tweetid,
                      encstring: JSON.parse(row.encstring),
                    });
                  });
                  dbConn4.query(
                    `SELECT id, tweetid, encstring FROM tweetdb4.tweets WHERE userid='${userid}' ORDER BY id`,
                    (err4, results4) => {
                      if (err4) {
                        console.log(err4);
                        return "error";
                      } else {
                        Object.keys(results4).forEach((key) => {
                          var row = results4[key];
                          strarr.push({
                            tweetid: row.tweetid,
                            encstring: JSON.parse(row.encstring),
                          });
                        });
                        dbConn5.query(
                          `SELECT id, tweetid, encstring FROM tweetdb5.tweets WHERE userid='${userid}' ORDER BY id`,
                          (err5, results5) => {
                            if (err5) {
                              console.log(err5);
                              return "error";
                            } else {
                              Object.keys(results5).forEach((key) => {
                                var row = results5[key];
                                strarr.push({
                                  tweetid: row.tweetid,
                                  encstring: JSON.parse(row.encstring),
                                });
                              });
                              dbConn6.query(
                                `SELECT id, tweetid, encstring FROM tweetdb6.tweets WHERE userid='${userid}' ORDER BY id`,
                                (err6, results6) => {
                                  if (err6) {
                                    console.log(err6);
                                    return "error";
                                  } else {
                                    Object.keys(results6).forEach((key) => {
                                      var row = results6[key];
                                      strarr.push({
                                        tweetid: row.tweetid,
                                        encstring: JSON.parse(row.encstring),
                                      });
                                    });
                                    dbConn7.query(
                                      `SELECT id, tweetid, encstring FROM tweetdb7.tweets WHERE userid='${userid}' ORDER BY id`,
                                      (err7, results7) => {
                                        if (err7) {
                                          console.log(err7);
                                          return "error";
                                        } else {
                                          Object.keys(results7).forEach(
                                            (key) => {
                                              var row = results7[key];
                                              strarr.push({
                                                tweetid: row.tweetid,
                                                encstring: JSON.parse(
                                                  row.encstring
                                                ),
                                              });
                                            }
                                          );
                                          dbConn8.query(
                                            `SELECT id, tweetid, encstring FROM tweetdb8.tweets WHERE userid='${userid}' ORDER BY id`,
                                            (err8, results8) => {
                                              if (err8) {
                                                console.log(err8);
                                                return "error";
                                              } else {
                                                Object.keys(results8).forEach(
                                                  (key) => {
                                                    var row = results8[key];
                                                    strarr.push({
                                                      tweetid: row.tweetid,
                                                      encstring: JSON.parse(
                                                        row.encstring
                                                      ),
                                                    });
                                                  }
                                                );
                                                dbConn9.query(
                                                  `SELECT id, tweetid, encstring FROM tweetdb9.tweets WHERE userid='${userid}' ORDER BY id`,
                                                  (err9, results9) => {
                                                    if (err9) {
                                                      console.log(err9);
                                                      return "error";
                                                    } else {
                                                      Object.keys(
                                                        results9
                                                      ).forEach((key) => {
                                                        var row = results9[key];
                                                        strarr.push({
                                                          tweetid: row.tweetid,
                                                          encstring: JSON.parse(
                                                            row.encstring
                                                          ),
                                                        });
                                                      });
                                                      dbConn10.query(
                                                        `SELECT id, tweetid, encstring FROM tweetdb10.tweets WHERE userid='${userid}' ORDER BY id`,
                                                        (err10, results10) => {
                                                          if (err10) {
                                                            console.log(err10);
                                                            return "error";
                                                          } else {
                                                            Object.keys(
                                                              results10
                                                            ).forEach((key) => {
                                                              var row =
                                                                results10[key];
                                                              strarr.push({
                                                                tweetid:
                                                                  row.tweetid,
                                                                encstring:
                                                                  JSON.parse(
                                                                    row.encstring
                                                                  ),
                                                              });
                                                            });
                                                            let finarr = [];
                                                            let finstr = "";
                                                            let tweetid = "";
                                                            for (
                                                              let i = 0;
                                                              i <
                                                              tweetidarry.length;
                                                              i++
                                                            ) {
                                                              finstr = "";
                                                              var filtered = [];
                                                              filtered =
                                                                strarr.filter(
                                                                  (a) =>
                                                                    a.tweetid ==
                                                                    tweetidarry[
                                                                      i
                                                                    ].tweetid
                                                                );
                                                              let secretKey =
                                                                tweetidarry[i]
                                                                  .secretKey;

                                                              for (
                                                                let j = 0;
                                                                j <
                                                                filtered.length;
                                                                j++
                                                              ) {
                                                                finstr =
                                                                  finstr +
                                                                  decrypt(
                                                                    filtered[j]
                                                                      .encstring,
                                                                    secretKey
                                                                  );
                                                              }
                                                              finarr.push({
                                                                tweetid:
                                                                  tweetidarry[i]
                                                                    .tweetid,
                                                                decrypttweet:
                                                                  finstr,
                                                              });
                                                            }

                                                            console.log(finarr);
                                                            res.send(finarr);
                                                          }
                                                        }
                                                      );
                                                    }
                                                  }
                                                );
                                              }
                                            }
                                          );
                                        }
                                      }
                                    );
                                  }
                                }
                              );
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  );
});

app.get("/gettweet", (req, res, next) => {
  const body = req.body;
  const tweetid = body.tweetid;
  mysqlConnection.query(
    "SELECT * FROM tweets WHERE tweetid = ?",
    [tweetid],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});
