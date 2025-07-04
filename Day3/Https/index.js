let http = require("node:http");
let fs = require("node:fs");

let server = http.createServer((request, response) => {
  // response.writeHead(200,{Author:"Ramesh"});
  //   response.write("<h1> hello hhp </h1>");
  //   response.end();
  response.writeHead(200, { "Content-Type": "text/html" });
  if (request.url === "/favicon.ico") {
    response.write("");
  } else if (request.url === "/") {
    response.write(fs.readFileSync("index.html", "utf-8"));
  } else if (request.url === "/index.html") {
    response.write(fs.readFileSync("index.html", "utf-8"));
  } else if (request.url === "/about.html") {
    response.write(fs.readFileSync("about.html", "utf-8"));
  } else if (request.url === "/contact.html") {
    response.write(fs.readFileSync("contact.html", "utf-8"));
  } else {
    response.write(fs.readFileSync("NotFound.html", "utf-8"));
  }
  response.end();
});

server.listen(8956, "localhost", (error) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("website is now live");
  }
});
