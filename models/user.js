const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://1831gkumar:grv%40123@cluster0.l8fn9i7.mongodb.net/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const userSchema = mongoose.Schema({
  name: String,
  gmail: String,
  image: String
})

module.exports = mongoose.model("user",userSchema);
