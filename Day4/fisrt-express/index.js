// const express =require("express");
// const  config = require('./config.json')
// const app = express();
// let port = process.env.PORT || config.port

// app.get("/",(req,res)=>{
//     res.send("hello from express");
// })

// let loction = app.listen();
// console.log(loction.address().port)

// app.listen(port,config.host,(err) => {
//     if(err.code === 'EADDRINUSE') {
//         console.log("Port  is in are used")
//     }else{
//         console.log(process.env.PORT)
//         console.log(`live at in  ${port}`)
//     }
// })

// deno.js bun.js are futuere are replace in future for Node

// '''''''''''''''''''''''''''''''''''''''''

const express = require("express");
const path = require("node:path");
const app = express();
const CONFIG = require("./config.json");
const PORT = process.env.PORT || CONFIG.PORT;

// Middle Ware
//  -------------------------

// app.use('/assets',express.static(path.join(__dirname, 'Images')))

app.use(
  "/Images/01-layers-milos-tonchevski-unsplash.jpg",
  express.static(
    path.join(__dirname, "Images", "02-layers-tavin-dotson-unsplash.jpg")
  )
);

app.use(express.static(__dirname)); /// csss

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, CONFIG.HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`PORT IS AT RUNNING ${PORT}`);
  }
});
