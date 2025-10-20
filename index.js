const express = require("express");
let mysql = require("mysql2");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aquarius13",
  database: "mahasiswa",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:" + err.stack);
    return;
  }
  console.log("Connected to database");
});
