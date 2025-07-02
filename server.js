const express = require("express");
const ConnectDB = require("./config/db.js");

const app = express();

// Connect to the database
ConnectDB();

app.get("/", (req, res) => res.send("App running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
