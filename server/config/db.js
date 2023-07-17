const mongoose = require("mongoose"); 
mongoose.set("strictQuery", true);
const dotenv = require('dotenv');
dotenv.config();

const LINK = process.env.LINK

async function connection() {
  try {
    await mongoose.connect(`${LINK}`);
    console.log("Connected to Database");
  } catch (error) {
    console.error("Could not connect to the database");
  }
}

module.exports = connection;
