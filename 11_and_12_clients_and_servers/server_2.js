const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  console.log("Incoming request received");
  res.write(`Hello there, this is my response \n`);
  res.write(`Hey there again \n`);
  res.end(`This is the end...`);
});

server.listen(3000, "localhost", () => {
  console.log(`Server now listening to http://localhost:3000`);
});
