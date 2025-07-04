//  express is fram works


const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    // res.writeHead(200,{"Content-Type":"text/plain"});
    // res.write("wellcom")
    // res.end()

    res.send({"message":"wellcome to your life"});
    res.json({"message":"wellcome to your life"});
})

app.listen(9009,"localhost",(err)=>{
if(err) console.log(err)
    else console.log("server now lives at 9009")
})