const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const ConnectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Database connected!");
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = ConnectDB;
