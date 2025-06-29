require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });



const express = require("express");
const app = express();
const path = require('path');
const userModel = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req,res) => {
  res.render("index");
})

app.get("/read", async (req,res) => {
  let users= await userModel.find();
  res.render("read", {users});
})

app.get("/edit/:userid", async (req,res) => {
  let user = await userModel.findOne({_id: req.params.userid});
  res.render("edit", {user});
})

app.post("/update/:userid", async (req,res) => {
  let {name,image,gmail}=req.body;
  let user = await userModel.findOneAndUpdate({_id: req.params.userid}, {name,image,gmail}, {new:true});
  res.redirect("/read");
})

app.get("/delete/:id", async (req,res) => {
  let deletedusers= await userModel.findOneAndDelete({_id: req.params.id});
  res.redirect("/read");
})

app.post("/create", async (req,res) => {
  let {name,gmail,image}=req.body;
  let createduser = await userModel.create({
    name,
    gmail,
    image
  });
  res.redirect("/read");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
