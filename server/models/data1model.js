

const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true },
  city: { type: String, required: true },
  url: { type: String, required: true }
}, {
  collection: "data-1" // Specify the collection name here
});

const data1 = mongoose.model("data1", Schema);

module.exports = data1;


// const mongoose = require("mongoose");

// const Schema = mongoose.Schema({
//   full_name: { type: String, required: true},
//   email: { type: String, required: true},
//   number: { type: Number,  required: true},
//   city: { type: String,  required: true},
//   url: { type: String,  required: true}
// });

// const data1 = mongoose.model("data1", Schema);

// module.exports = data1;
