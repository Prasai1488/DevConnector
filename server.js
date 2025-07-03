const express = require("express");
const ConnectDB = require("./config/db.js");

const app = express();

// Connect to the database
ConnectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("App running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
