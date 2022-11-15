const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = 3001;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/api/initialize", (req, res) => {
  const sqlCreateTable =
    "CREATE TABLE IF NOT EXISTS mydb.admin (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))";
  db.query(sqlCreateTable, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("Table created");
  });
});

app.post("/api/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlInsert = "INSERT INTO admin (username, password) VALUES (?, ?)";
  db.query(sqlInsert, [username, password], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("Registered");
  });
});

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM admin WHERE username = ? AND password = ?";
  db.query(sqlSelect, [username, password], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM admin";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/api/create", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = "test";
  const sqlInsert = "INSERT INTO users (name,email,password) VALUES (?,?,?)";
  db.query(sqlInsert, [name, email, password], (err, result) => {
    if (err) console.log(err);
    res.send("Success");
  });
});

app.get("/api/gets", (req, res) => {
  const sqlSelect = "SELECT * FROM users";
  db.query(sqlSelect, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
