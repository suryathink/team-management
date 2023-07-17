

const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  team_name: { type: String, required: true }
}, {
  collection: "data-2" // Specifing the collection name here
});

const data2 = mongoose.model("data2", Schema);

module.exports = data2;







