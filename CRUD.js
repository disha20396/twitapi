const dbConn1 = require("./DBInstance1");
const dbConn2 = require("./DBInstance2");
const dbConn3 = require("./DB3");
const dbConn4 = require("./DB4");
const dbConn5 = require("./DB5");
const dbConn6 = require("./DB6");
const dbConn7 = require("./DB7");
const dbConn8 = require("./DB9");
const dbConn9 = require("./DB9");
const dbConn10 = require("./DB10");

const insertfirst = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn1.query(
    `INSERT INTO tweetdb1.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const insertsecond = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn2.query(
    `INSERT INTO tweetdb2.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const insertthird = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn3.query(
    `INSERT INTO tweetdb3.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const insertforth = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn4.query(
    `INSERT INTO tweetdb4.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const insertfifth = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn5.query(
    `INSERT INTO tweetdb5.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const insertsixth = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn6.query(
    `INSERT INTO tweetdb6.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const insertseventh = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn7.query(
    `INSERT INTO tweetdb7.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const inserteight = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn8.query(
    `INSERT INTO tweetdb8.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const insertninth = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn9.query(
    `INSERT INTO tweetdb9.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

const inserttenth = (tweetid, hash, userid, secretkey) => {
  console.log(tweetid);
  console.log(JSON.stringify(hash));
  const data = JSON.stringify(hash);

  dbConn10.query(
    `INSERT INTO tweetdb10.tweets (tweetid, encstring, userid, secretkey) VALUES ('${tweetid}', '${data}', '${userid}', '${secretkey}')`,
    (err, res) => {
      if (err) {
        console.log(err);
        return "error";
      } else {
        console.log(tweetid);
        return tweetid;
      }
    }
  );
};

module.exports = {
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
};
