// steames

const fs = require("node:fs");
const server = require("node:http").createServer();

server.on("request", (req, res) => {
  //read
  // fs.readFile("./temp.text", "utf-8", (err, data) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     res.end(data);
  //   }
  // });

  // stream
  const src = fs.createReadStream("./temp.text");
  src.pipe(res);
});

server.listen(8000);
console.log("server is now on localhost: 8000");
