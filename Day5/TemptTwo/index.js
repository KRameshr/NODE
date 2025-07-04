// PROJECT

// sending the  data form template to sever

const express = require("express");
const CONFIG = require("./CONFIG.json");
const app = express();
const PORT = process.env.PORT || CONFIG.PORT;

// default template location
app.set("views", __dirname + "/templates");

// default template engine
app.set("view engine", "ejs");
// app.set("view engine", "pug");

// middleware
app.use(express.urlencoded({ extended: true }));
// for ejs template to lode the style css
app.use(express.static(__dirname + "/templates"));
let arbalist = [];

app.get("/", (req, res) => {
  res.render("home", { arbalist });
});

app.post("/", (req, res) => {
  //   console.log(req.body);
  if (req.body.username === "") {
    res.send("fill the blank");
  } else {
    arbalist.push(req.body.username);
  }

  //   console.log(arbalist);
  //   res.send("Your respond is saved");
  res.redirect("/");
});

// =============
app.listen(PORT, CONFIG.HOST, (err) => {
  if (err) console.log(err);
  else console.log(`PORT is running at ${PORT}`);
});
