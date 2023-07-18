

const mongoose = require("mongoose");

const data1Schema = mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  city: { type: String, required: true },
  url: { type: String, required: true }
});

const DATA1 = mongoose.model("data1", data1Schema);

module.exports = DATA1;

