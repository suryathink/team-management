
const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  full_name: { type: String, required: true},
  email: { type: String, required: true},
  number: { type: Number,  required: true},
  city: { type: String,  required: true},
  url: { type: String,  required: true}
});

const data1 = mongoose.model("data1", Schema);

module.exports = data1;




// full_name
// "Violante Pollastrino"
// email
// "vpollastrino0@google.com.br"
// number
// 6468050108
// city
// "Shu"
// url
// "http://ucsd.edu/est/lacinia/nisi/venenatis/tristique/fusce/congue.json"