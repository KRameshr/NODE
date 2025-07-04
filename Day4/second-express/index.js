const express = require('express');
const CONFIG = require('./CONFIG.json')
const app = express()
const PORT = process.env.PORT || CONFIG.PORT


// +++++++++++++++++++++++++++++++++++++++++++++++++++


// middle wares  are in synchrnous


//  global middle wares

app.use(function(req,res,next){
    console.log("First M")
    console.log(req.url)
    next()
})

app.use(function(req,res,next){
    console.log("Second M")
    console.log(req.url)
    next()
})

// local middle ware only  specific routers
//   any function is a middle ware 
function anythinghandler(req,res,next){
    console.log('local middle ware 1');
    next()
}

function ONEanythinghandler(req,res,next){
    console.log('local middle ware 2');
    next()
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// handeler

// default routers
app.get("/",(req,res)=>{
    res.send("WelloCome To The hello world")
})
// named routers
app.get("/anything",anythinghandler,ONEanythinghandler,(req,res)=>{
    res.send("hello world anything anything")
})

// wildcard routers
app.get("**",(req,res)=>{
    res.send("hello world anything anything ******")
})



// portset up

app.listen(PORT,CONFIG.HOST,(err)=>{
    if(err)console.log(err)
        else console.log(`PORT is running at ${PORT}`)
})