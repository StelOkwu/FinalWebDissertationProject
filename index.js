const express = require("express");
const  mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//making a connection to the Database
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    port: "3308",
    database: "loginsystem",
});

//making the route for Register Form Button 
app.post("/register", (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;
//creating the quuery and inserting values into the DB 
    db.query("INSERT INTO users (username, password) VALUES (?,?)", 
    [username, password],
    (err, result) => {
        console.log(err);
    });
});

app.post("/login", (req, res)=> {
     const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({err: err});
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username and password combination"});
            }
           
        }
    );
})

//making the route for get request which will help in getting the result from DB table
app.get("/api/get", (req, res) => {
     const sqlSelect = "SELECT * FROM customers";
     db.query(sqlSelect, (err, result) => {
         res.send(result);
                // console.log(result);
            });
});

// making the route for Creating new Customer 
app.post("/api/insert", (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email; 
    const phoneNo = req.body.phoneNo;

        const sqlInsert = "INSERT INTO customers (name, address, email, phoneNo) VALUES (?,?,?,?)"
        db.query(sqlInsert, [name, address, email, phoneNo],
            (err, result) => {
                console.log(result);
            });
});

// Making the route for Deleting each created Customer
app.delete("/api/delete/:id", (req, res) => {
    const id = req.params.id;
    const sqlDelete = 
    "DELETE FROM customers WHERE id = ?";

    db.query(sqlDelete, id, (err, result) => {
       if (err) console.log(err);
    });
});

//Making the route for Updating the Customer
app.put("/api/update", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    db.query("UPDATE customers SET name = ?, address = ?, email = ?, phoneNo = ? WHERE id = ?",
    [name, address, email, phoneNo, id],
        (err, result) => {
       if (err) {
           console.log(err);
       } else {
           res.send(result);
       }
    });
});




app.listen(3001, () => {
    console.log("running server on port 3001");
});