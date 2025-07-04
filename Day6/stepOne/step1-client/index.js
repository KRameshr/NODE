// take input from the user and store in the server in form of json data

const express = require("express");
const CONFIG = require("./config.json");
const app = express();
const PORT = CONFIG.PORT || process.env.PORT;

app.use(express.static(__dirname + "/public"));

app.listen(PORT, CONFIG.HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The website is Running at ${PORT}`);
  }
});
