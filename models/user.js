const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/prac');

const userSchema = mongoose.Schema({
  name: String,
  gmail: String,
  image: String
})

module.exports = mongoose.model("user",userSchema);