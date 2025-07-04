var fs = require("node:fs");
const { connected } = require("node:process");
fs.writeFileSync(
  " temp.text ",
  "Hello world one time investiment of the life will come",
  { encoding: "utf-8" }
);
//utf-8 is unicode of 8 bit code

// Read file syncronious
let rf = fs.readFileSync("text.txt").toString();
console.log(rf);


let rfs = fs.readFileSync("text.txt").toLocaleString();
console.log(rfs);
let rfsd = fs.readFileSync("text.txt").toLocaleString();
console.log(typeof rfsd);
// asyncronious
fs.writeFile(
  " info.txt ",
  "Hello world one time investiment of the life will com",
  { encoding: "utf-8" },
  function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);
//  read file
// fs.writeFileSync('text.txt',"  hello",{encoding : "utf-8",flag:'a'});

fs.mkdirSync("data");
process.chdir("data");
fs.writeFileSync("text.txt", "Hello world ", "utf8");
console.log("file is ready");
console.log("dirNeme " + __dirname);
console.log("PROCESS " + process.cwd());

// how to read file outside(external);
var fetc = require("fetch");
// var fssw = require('node:fs');
fetc.fetchUrl("url for this website", null, function (err, meta, data) {
  console.log(data.toString());
  // fssw.writeFileSync('ws.html',data,'utf8')
});

//  extenal module  require('fetch') , built in module require('node:fs')
