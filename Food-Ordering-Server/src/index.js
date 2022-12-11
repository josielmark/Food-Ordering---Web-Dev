
const express =  require('express');
const bodyParser = require("body-parser");
const Database = require("./configs/Database");
const app = express();
const cors = require("cors");
require("dotenv/config");
// const products = require("../public/products/products")
const PORT = process.env.PORT || 3001
const productsRoute = require("./routes/Products");
const userRoute = require("./routes/User");
const categoryRoute = require("./routes/Category");
const multer = require('multer');
const fs = require('fs');
const upload = multer({dest:"./uploads"})

app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"))
app.use('/products/images', express.static('uploads'))
  

app.use("/api/products", productsRoute);
app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);

app.get('/', (req, res) => {
    res.send("API is Running....");
});


app.post("/api/upload", upload.single("avatar"), async (req, res) => {
    let fileType = req.file.mimetype.split('/')[1]
    console.log('file type', fileType)
    let newFileName = req.file.filename + '.' + fileType;
    console.log(newFileName);
    fs.rename(`./uploads/${req.file.filename}`, `./uploads/${newFileName}`, function(err){
        if(err) throw err;
        console.log("Uploaded Success")
    })
    const db = new Database();
    const conn = db.connection;

    const {title, price, image01, category, description} = req.body;
    const query = "INSERT INTO products (title, price, image01, category, description, createdAt, updatedAt) VALUES (?,?,?,?,?,?,?)"
    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const values = [
        title, 
        price, 
        `images/${newFileName}`, 
        category, 
        description,
        date_now,
        date_now
    ]

    await conn.connect((err) => {
        if (err) throw err; 
        conn.query(query,values,(err,result) => {
            if (err) throw err;
            console.log(result);
            res.json({data: 'Product added to database'})
        })
    })
    // await conn.connect((err) => {
    //     if (err) throw err;
    //     conn.query(
    //         `INSERT INTO products (title, price, image01, category, description, createdAt, updatedAt) VALUES (?,?,?,?,?,?,?)`,[title,price,image01,category,description,date_now,
    //             date_now],
    //         (error, result) => {
    //             if (error) throw error;
    //             console.log(result)
    //             res.json({ success: true, message: "Successfully added"});
    //         }
    //     );
    // });
});





app.listen(PORT, function() {
    const db = new Database();
    db.TestConnection();
    console.log(`Server running in ${PORT}`);
});