const express =  require('express');
const Database = require("../configs/Database");
const router = express.Router();

router.get("/", async(req, res) => {
    const db = new Database();
    const conn = db.connection

    const query = "SELECT * FROM products";

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
        conn.query("Select * from products where id = ?" ,[id] ,(error, rows) => {
            if(err) throw err;
            res.json(rows[0]);
        });
    });
});

router.delete('/delete/:id', async function(req, res) {
    const db = new Database();
    const conn = db.connection;

    const {id} = req.params
    const query = "DELETE FROM products WHERE id = ?"

    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,id,(err,result) => {
            if(err) throw err;
            console.log(result)
            res.json(result)
        })
    })
})


router.put('/edit/:id', async function(req,res) {
    const db = new Database();
    const conn = db.connection;

    const {id} = req.params
    const {title, price, category, description} = req.body;
    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const query = "UPDATE products SET title = ?, price = ?, category = ?, description = ?, updatedAt = ? WHERE id = ?"
    const values = [
        title,
        price,
        category,
        description,
        date_now,
        id
    ]

    await conn.connect((err) => {
        if(err) throw err;
        conn.query(query,values, (err, result) => {
            if(err) throw err;
            console.log(result)
            res.json({message: "Product updated successfully"});
        })
    })

})

module.exports = router;