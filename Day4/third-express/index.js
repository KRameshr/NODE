const express = require("express");
const CONFIG = require("./CONFIG.json");
const app = express();
const PORT = process.env.PORT || CONFIG.PORT;

// app.get("/favicon.icon", (req, res) => {
//   res.send();
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/Index.html");
// });
// app.get("/home", (req, res) => {
//   res.sendFile(__dirname + "/public/Index.html");
// });
// app.get("/about", (req, res) => {
//   res.sendFile(__dirname + "/public/About.html");
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/public/Contact.html");
// });

// app.get("**", (req, res) => {
//   res.sendFile(__dirname + "/public/NotFound.html");
// });

// app.get("/favicon.icon", (req, res) => {
//   res.render();
// });

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/home", (req, res) => {
  res.render("home.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("**", (req, res) => {
  res.render("notfound.ejs");
});

app.listen(PORT, CONFIG.HOST, (err) => {
  if (err) console.log(err);
  else console.log(`PORT is running at ${PORT}`);
});
