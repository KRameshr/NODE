// take input from the user and store in the server in form of json data

const express = require("express");
const CONFIG = require("./config.json");
const mongoose = require("mongoose");
const morgan = require("morgan");
const root = require("./routes/root");
const app = express();
const PORT = CONFIG.PORT || process.env.PORT;

// middleware

// app.use(express.static(__dirname + "/public", { index: "default.html" }));
app.use(root);
app.use(express.static(__dirname));
app.use(morgan("tiny"));
app.use(express.json());

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

// webserver
app.listen(PORT, CONFIG.HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The ${CONFIG.HOST} website is Running at ${PORT}`);
  }
});
