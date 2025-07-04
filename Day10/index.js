const express = require("express");
const app = express();
const CONFIG = require("./CONFIG.json");
const { default: mongoose, connect, Schema } = require("mongoose");
const PORT = CONFIG.PORT || process.env.PORT;

// middle
// app.use(express.static(__dirname + "/public", { index: "default.html" }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
// ===============================

// mode

let schema = mongoose.Schema;
let ObjectId = schema.ObjectId;
let Hero = mongoose.model(
  "Hero",
  new schema({
    id: ObjectId,
    title: String,
    fname: String,
    lname: String,
    email: String,
    city: String,
  })
);

//router
let dusting =
  "mongodb+srv://{{uname}}:{{upass}}@cluster0.{{username}}.mongodb.net/{{udbname}}?retryWrites=true&w=majority&appName=Cluster0";
dusting = dusting
  .replace("{{uname}}", CONFIG.admin)
  .replace("{{upass}}", CONFIG.userPassword)
  .replace("{{username}}", CONFIG.userName)
  .replace("{{udbname}}", CONFIG.databaseName);
mongoose
  .connect(dusting)
  .then((res) => console.log("connected to DB"))
  .catch((err) => console.log(err));
// DB commands

setTimeout(() => {
  //get
  // Hero.find()
  //   .then((dres) => console.log(dres))
  //   .catch((err) => console.log(err));
  // //create
  // let hero = new Hero({
  //   title: "ironMan",
  //   fname: "spider",
  //   lname: "man",
  //   email: "s@gmail.com",
  //   city: "delhi",
  // });
  // hero
  //   .save()
  //   .then((dres) => console.log(dres))
  //   .catch((err) => console.log(err));
}, 1000);

// Router
// -----------------
// get
app.get("/data", (req, res) => {
  Hero.find()
    .then((dres) => res.send(dres))
    .catch((err) => console.log(err));
});

// create

app.post("/data", (req, res) => {
  let hero = new Hero(req.body);
  hero
    .save()
    .then((dres) => res.status(200).send({ message: dres.title + "data add" }))
    .catch((err) => res.status(500).send({ Error: err }));
});
// update
app.get("/update/:hid", (req, res) => {
  Hero.findById(req.params.hid)
    .then((dbres) => {
      res.status(200).send(dbres);
    })
    .catch((err) => console.log(err));
});
app.post("/update/:hid", (req, res) => {
  Hero.findByIdAndUpdate(req.params.hid, {
    title: req.body.title,
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    city: req.body.city,
  })
    .then((dbres) => {
      console.log(dbres);
      res.send({ message: "hero updated" });
    })
    .catch((err) => console.log(err));
});
// delete

app.delete("/delete/:hid", (req, res) => {
  Hero.findByIdAndDelete(req.params.hid)
    .then((dbres) => {
      console.log(dbres);
      res.status(200).send({ message: "hero deleted" });
    })
    .catch((err) => console.log(err));
});

// web server
// ==========================================
app.listen(PORT, CONFIG.HOST, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("PORT IS RUNNING AT " + `${PORT}`);
  }
});
