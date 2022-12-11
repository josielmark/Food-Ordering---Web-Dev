const express = require("express");
const Database = require("../configs/Database");
const router = express.Router();
const authenticate = require("../helpers/auth");
router.delete("/:id", authenticate, async (req, res) => {
  const { id } = req.params;

  const db = new Database(); //Instance
  const conn = db.connection; // Defined conn for connection prop

  await conn.connect((err) => {
    if (err) throw err;
    conn.query(`Delete from students where id = ${id} `, (error, result) => {
      if (error) throw err;
      res.json({ success: true, message: "Student deleted" });
    });
  });
});

router.put("/:id", authenticate, async (req, res) => {
  const { fullname } = req.body;
  const { id } = req.params;

  const db = new Database(); //Instance
  const conn = db.connection; // Defined conn for connection prop

  await conn.connect((err) => {
    if (err) throw err;
    conn.query(
      `UPDATE  students set  fullname ="${fullname}" where id = ${id} `,
      (error, result) => {
        if (error) throw err;
        res.json({ success: true, message: "Successfully updated" });
      }
    );
  });
});

router.post("/", authenticate, async (req, res) => {
  const { fullname } = req.body;

  const db = new Database(); //Instance
  const conn = db.connection; // Defined conn for connection prop

  await conn.connect((err) => {
    if (err) throw err;
    conn.query(
      `INSERT into students (fullname) values ("${fullname}")`,
      (error, result) => {
        if (error) throw err;
        res.json({ success: true, message: "Successfully added" });
      }
    );
  });
});

router.get("/", authenticate, async (req, res) => {
  const db = new Database(); //Instance
  const conn = db.connection; // Defined conn for connection prop
  await conn.connect((err) => {
    if (err) throw err;
    conn.query("select * from students", (error, rows) => {
      if (error) throw error;
      res.json(rows);
    });
  });
});

//Get request with id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = new Database(); //Instance
  const conn = db.connection; // Defined conn for connection prop
  await conn.connect((err) => {
    if (err) throw err;
    conn.query(`select * from students where id = ${id}`, (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  });
});

module.exports = router;
