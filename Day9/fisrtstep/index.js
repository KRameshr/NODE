let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url === "/favicon.ico") {
    res.write("");
  } else if (req.url === "/") {
    res.write(fs.readFileSync("index.html", "utf-8"));
  } else if (req.url === "/home") {
    res.write(fs.readFileSync("home.html", "utf-8"));
  } else {
    res.write(fs.readFileSync("notfound.html", "utf-8"));
  }
  res.end();
});
server.listen(5605, "localhost", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("running");
  }
});
