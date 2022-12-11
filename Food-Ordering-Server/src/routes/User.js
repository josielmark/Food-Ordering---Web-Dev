const { query } = require("express");
const e = require("express");
const express= require("express");
const Database = require("../configs/Database");
const router = express.Router();
// const bcrypt = require('bcrypt')

router.get("/", async function (req, res) {
    const db = new Database();
    const conn = db.connection;

    conn.connect((err) => {
        if (err)
            throw err;
        conn.query("SELECT * FROM user", (error, result) => {
            if (err)
                throw err;
            res.json(result);
        });
    })     
})

router.post("/register", async function(req, res) {
    const db = new Database();
    const conn = db.connection;
    date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    // console.log("data: ",req.body.firstname)
    const query = "INSERT INTO user(`firstname`, `lastname`, `phone`, `email`, `password`, `createdAt`, `updatedAt`, `role`) VALUES (?,?,?,?,?,?,?,?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.phone,
        req.body.email,
       req.body.password,
        date_now,
        date_now,
        "normal"
    ];
    // console.log(values)
    // res.json(req.body.firstname)
    conn.connect((err) => {
        if (err)
            throw err;
        conn.query(query, values, (err, result) => {
            if (err)
                throw err;
            console.log(result);
            return res.json({ success: true, message: "New User has been Registered" });
        });
    })
})

router.post("/login", async function(req, res) {
    const db = new Database();
    const conn = db.connection;

    const query = "SELECT * FROM user WHERE email = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ]
    conn.connect((err) => {
        if (err)
            throw err;
        conn.query(query, values, (err, result) => {
            if (err)
                throw err;
            if (result.length > 0) {
                return res.json({ success: true, message: "Login Successfully", data: result[0] });
            }
            else {
                return res.json({ success: false, message: "Log in Failed" });
            }
        });
    })
}) 

module.exports = router;
// const express = require("express");
// const Database = require("../configs/Database");
// const router = express.Router();
// const bcrypt = require('bcrypt')
// // const Validation = require('../middleware/Validation')
// const {body, validationResult} = require('express-validator');

// //registration validation
// const registerValidation = [
//     body('firstname').not().isEmpty().withMessage("First name is required").trim().escape(),
//     body('lastname').not().isEmpty().withMessage("Last name is required").trim().escape(),
//     body('email').not().isEmpty().withMessage('Email is required').isEmail().withMessage("Invalid Email"),
//     body('password').isLength({min: 7}).withMessage('Password must be atleast 7 characters').custom((value, {req}) => value === req.body.password).withMessage("The passwords do not match")
// ]

// //change password validation
// const changePasswordMatch = [
//     body('old_password').isLength({min: 7}).withMessage('Password must be atleast 7 characters').custom((value, {req}) => value === req.body.confirm_old_password).withMessage("The passwords do not match"),
//     body('new_password').isLength({min: 7}).withMessage('Password must be atleast 7 characters').custom((value, {req}) => value === req.body.confirm_new_password).withMessage("The passwords do not match")
    
// ]
// //login validation
// const loginValidation = [
//     body('email').not().isEmpty().withMessage('Email is required').isEmail().withMessage("Invalid Email"),
//     body('password').isLength({min: 7}).withMessage('Password must be atleast 7 characters').custom((value, {req}) => value === req.body.password).withMessage("The passwords do not match")
// ]

// // get all users cc: testing purposes if the api works
// router.get("/", async function(req, res) {
//     const db = new Database();
//     const conn = db.connection;

//     await conn.connect((err) => {
//         if(err) throw err;
//         conn.query("SELECT * FROM user", (error, result) => {
//             if(err) throw err;
//             res.json(result)
//         });
//     })
// })

// router.post("/register", ...registerValidation ,async function(req,res) {
    
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const db = new Database();
//     const conn = db.connection;

//     date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

//     const query = "INSERT INTO user(`firstname`, `lastname`, `email`, `phone`,`password`, `createdAt`, `updatedAt`,`role`) VALUES (?,?,?,?,?,?,?,?)";
//     const values = [
//         req.body.firstname,
//         req.body.lastname,
//         req.body.email,
//         req.body.phone,
//         bcrypt.hashSync(req.body.password, 10),
//         date_now,
//         date_now,
//         "normal"
//     ]

//     await conn.connect((err) => {
//         if(err) throw err;
//         conn.query(query,values, (err,result) => {
//             if(err){
//                 if(err.code === 'ER_DUP_ENTRY'){
//                     return res.json({message: "Email already exist", success: false})
//                 }
//                 else{
//                     throw err;
//                 }
//             }
            
//             console.log(result)
//             return res.json({message: "New User has been Registerd"})
//         })
//     })
// });


// router.put('/edit/profile/:id', ...changePasswordMatch ,async function(req,res) {
//     const db = new Database();
//     const conn = db.connection;

//     date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');


//     const query = "UPDATE user SET firstname = ?, lastname = ?, email = ?, phone = ?, updated_at = ? WHERE id = ?"

//     const values = [
//         req.body.firstname,
//         req.body.lastname,
//         req.body.email,
//         req.body.phone,
//         date_now,
//         req.params.id
//     ]

//     await conn.connect((err) => {
//         if(err) throw err;
//         conn.query(query,values, (err,result) =>{
//             if(err) {
//                 if(err.code === 'ER_DUP_ENTRY'){
//                     return res.json({message: "Email already exist", success: false})
//                 }
//                 else{
//                     throw err;
//                 }
//             };
//             console.log(result)
//             return res.json({message: "Profile Updated", success: true})
//         })
//     })

// })

// router.put('/change_password/:id', ...changePasswordMatch ,async function(req,res) {
    
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const db = new Database();
//     const conn = db.connection;

//     date_now = date = new Date().toISOString().slice(0, 19).replace('T', ' ');

//     const {old_password, confirm_old_password, new_password, confirm_new_password} = req.body
//     const {id} = req.params

//     const query = "UPDATE user SET password = ?, updated_at = ? WHERE id = ?"
//     const values = [
//         bcrypt.hashSync(new_password, 10),
//         date_now,
//         id
//     ]

//     await conn.connect((err) => {
//         if (err) throw err;
//         conn.beginTransaction((err) => {
//             conn.query("SELECT * FROM user WHERE id = ?", [id], (err,result) => {
//                 if(err) {
//                     return conn.rollback(function () {
//                         throw err;
//                     })
//                 }
//                 console.log(result)

//                 if(result.length > 0 && bcrypt.compareSync(old_password, result[0].password)) {
//                     conn.query(query,values, (err, result) => {
//                         if (err) {
//                             return conn.rollback(function () {
//                                 throw err;
//                             });
//                         }
//                         conn.commit((err) => {
//                             if(err){
//                                 return conn.rollback(() => {
//                                     console.log("Error", err.sqlMessage);
//                                     throw err;
//                                 })
//                             }
//                         })

//                         res.json({message: "Password changed successfully", success: true})
//                     })
//                 }
//             })
//         })
//     })
// })

// router.post('/login', ...loginValidation ,async function(req,res) {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }


//     const db = new Database();
//     const conn = db.connection;

//     const query = "SELECT * FROM user WHERE email = ?";
//     const values = [
//         req.body.email,
//     ]

//     await conn.connect((err) => {
//         if (err) throw err;
//         conn.query(query, values, (err, result) => {
//             if(err) throw err;
//             if(result.length > 0 && bcrypt.compareSync(req.body.password, result[0].password)){
//                 res.json({success: true, message: "Login Successful"})
//             }
//             else{
//                 res.json({success: false, message: "Login Failed"})
//             }
//         })
//     })
// });


// module.exports = router;