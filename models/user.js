
const mongoose = require('mongoose');
const uri = "mongodb+srv://1831gkumar:grv%40123@cluster0.l8fn9i7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);



const userSchema = mongoose.Schema({
  name: String,
  gmail: String,
  image: String
})

module.exports = mongoose.model("user",userSchema);
