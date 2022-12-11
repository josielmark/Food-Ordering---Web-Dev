const express = require("express");
const Database = require("../configs/Database");
const router = express.Router();
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const db = new Database();
  const conn = db.connection;
  await conn.connect(async (err) => {
    if (err) return err;
    await conn.query(
      `SELECT * FROM users where username = ? and password = ?`,
      [username, password],
      (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
          const token = jwt.sign(
            {
              UserId: fields.id,
              username: username,
            },
            SECRET_KEY,
            { expiresIn: "1h" }
          );
          return res.json({
            success: true,
            message: "Login Successfull",
            token: token,
          });
        }
      }
    );
  });
});

router.post("/register", (req, res) => {
  const { fullname, username, password } = req.body;
  const db = new Database();
  const conn = db.connection;
  let userId = null;
  conn.connect((err) => {
    if (err) throw err;
    conn.beginTransaction(function (err) {
      if (err) {
        throw err;
      }
      //This the first query to be executed. If there are some
      //errors found it will return a callback function rollback()
      //First query to be executed
      conn.query(
        "INSERT INTO users (username, password) values (?,?)",
        [username, password],
        function (error, results) {
          if (error) {
            return conn.rollback(function () {
              throw error;
            });
          }

          userId = results.insertId;
          //Nested query
          conn.query(
            "INSERT INTO students (fullname, user_id) values (?,?)",
            [fullname, userId],
            function (error, results) {
              if (error) {
                return conn.rollback(function () {
                  throw error;
                });
              }
              conn.commit(function (err) {
                if (err) {
                  return conn.rollback(function () {
                    console.log("Error", err.sqlMessage);
                    throw err;
                  });
                }
                const token = jwt.sign(
                  {
                    UserId: userId,
                    name: fullname,
                  },
                  SECRET_KEY,
                  { expiresIn: "10s" }
                );
                res.send({ success: true, message: "Success", token: token });
              });
            }
          );
          //End of second query
        }
      );
    });
  });
});

module.exports = router;
