

const mongoose = require("mongoose");

const data2Schema = mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  team_name: { type: String, required: true }
});

const DATA2 = mongoose.model("data2", data2Schema);

module.exports = DATA2;







