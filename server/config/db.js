const mongoose = require("mongoose"); 
mongoose.set("strictQuery", true);
const dotenv = require('dotenv');
dotenv.config();
const PASSWORD = process.env.PASSWORD
const USERNAME = process.env.USERNAME

async function connection() {
  try {
    await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.f5v9sqq.mongodb.net/`);
    console.log("Connected to Database");
  } catch (error) {
    console.error("Could not connect to the database");
  }
}

module.exports = connection;
