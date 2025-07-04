const express = require("express");
const CONFIG = require("./CONFIG.json");
const app = express();
const PORT = process.env.PORT || CONFIG.PORT;

let companey = "Intellipat";
let heroes = ["Ramesh", "Ganesh", "Suresh", "Naresh"];

// app.get("/favicon.icon", (req, res) => {
//   res.render();
// });

// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

// app.get("/home", (req, res) => {
//   res.render("index.ejs");
// });

// app.get("/about", (req, res) => {
//   res.render("about.ejs");
// });

// parameter of router
app.get("/about/past", (req, res) => {
  res.render("about.ejs");
});
app.get("/about/:message", (req, res) => {
  res.render("about.ejs", {
    message: req.params.message,
    companey: companey,
    heroes,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("**", (req, res) => {
  res.render("notfound.ejs");
});

// =====================================================================

// app.get("/", (req, res) => {
//   res.render("home.pug", { heroes });
// });
// app.get("/about", (req, res) => {
//   res.render("past.pug");
// });
// app.get("/about/:message", (req, res) => {
//   res.render("past.pug", {
//     message: req.params.message,
//     com: companey,
//     heroes,
//     obj,
//   });
// });

// -------------------------------------

app.listen(PORT, CONFIG.HOST, (err) => {
  if (err) console.log(err);
  else console.log(`PORT is running at ${PORT}`);
});

// interpoliation when sending the data to server and tipit to clint side
