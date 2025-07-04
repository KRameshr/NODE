// take input from the user and store in the server in form of json data

const express = require("express");
const CONFIG = require("./config.json");
const mongoose = require("mongoose");
const app = express();
const PORT = CONFIG.PORT || process.env.PORT;
const cors = require("cors");

// middleware

var corsOptions = {
  origin: "http://localhost:5500",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// app.use(express.static(__dirname + "/public", { index: "default.html" }));
// app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE ");
  next();
});
// model

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Hero = mongoose.model(
  "Heroe",
  new Schema({
    id: ObjectId,
    title: String,
    fistName: String,
    lastName: String,
    email: String,
    city: String,
  })
);

// DB CONNECT
let dbString =
  "mongodb+srv://{{uname}}:{{upass}}@cluster0.{{ustring}}.mongodb.net/{{dbname}}?retryWrites=true&w=majority&appName=Cluster0";
url = dbString
  .replace("{{uname}}", CONFIG.dbusername)
  .replace("{{upass}}", CONFIG.dbpassword)
  .replace("{{ustring}}", CONFIG.dbuserString)
  .replace("{{dbname}}", CONFIG.dbname);
mongoose
  .connect(url)
  .then((res) => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Routers
app.post("/data", (req, res) => {
  let hero = new Hero(req.body);
  hero
    .save()
    .then((dres) =>
      res.status(200).send({ message: dres.title + "hero added" })
    )
    .catch((dberr) => res.status(500).send({ dberr: "Error" }));
});
app.get("/data", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  Hero.find()
    .then((dbres) => res.send(dbres))
    .catch((err) => console.log(err));
});

app.get("/updata/:hid", (req, res) => {
  Hero.findById(req.params.hid)
    .then((dbres) => res.status(200).send(dbres))
    .catch((err) => console.log(err));
});
app.post("/updata/:hid", (req, res) => {
  Hero.findByIdAndUpdate(req.params.hid, {
    title: req.body.title,
    fistName: req.body.fistName,
    lastName: req.body.lastName,
    email: req.body.email,
    city: req.body.city,
  })
    .then((dbres) => {
      // console.log(dbres);
      res.status(200).send({ message: "hero updated" });
    })
    .catch((err) => console.log(err));
});
app.delete("/delete/:hid", (req, res) => {
  Hero.findByIdAndDelete(req.params.hid)
    .then((dbres) => {
      // console.log(dbres);
      res.status(200).send({ message: "hero deleted" });
    })
    .catch((err) => console.log(err));
});

// webserver
app.listen(PORT, CONFIG.HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The website is Running at ${PORT}`);
  }
});
