const express =  require('express');
const Database = require("../configs/Database");
const router = express.Router();
// const authenticate = require("../helpers/auth")

router.get("/", async(req, res) => {
    const db = new Database();
    const conn = db.connection

    const query = "SELECT * FROM category";

    await conn.connect((err) => {
        if (err) throw err;
        conn.query(query, (err, result) => {
            if(err) throw err;
            res.json(result)
        })
    }

    )
});

router.get("/:id", async(req, res) => {
    const {id} = req.params;
    const db = new Database();
    const conn = db.connection;
    await conn.connect( (err) => {
        if (err) throw err;
        conn.query(`Select * from category where id = ${id} ` ,(error, rows) => {
            if(err) throw err;
            res.json(rows[0]);
        });
    });
});

router.post("/",async (req, res) => { 
    const {title, image} = req.body;
    const db = new Database();
    const conn = db.connection;

    await conn.connect((err) => {
        if (err) throw err;
        conn.query(
            `INSERT INTO category ( title, image) VALUES (?,?)`,[title,image],
            (error, result) => {
                if (error) throw error;
                console.log(result)
                res.json({ success: true, message: "Successfully added"});
            }
        );
    });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const db = new Database(); //Instance
  const conn = db.connection; // Defined conn for connection prop

  await conn.connect((err) => {
    if (err) throw err;
    conn.query(`Delete from category where id = ${id} `, (error, result) => {
      if (error) throw err;
      res.json({ success: true, message: "Category deleted" });
    });
  });
});

module.exports = router;