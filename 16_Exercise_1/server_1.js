const http = require("http"); 
const HOSTNAME = "localhost";
const PORT = 8000;
const fs = require("fs");
const path = require("path");


const readPath = path.join(__dirname, "./readme.txt");


const server = http.createServer(requestHandler);
function requestHandler(req, res) {
  // console.log(req)
  console.log("incoming request received");
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Add 'utf8' encoding so that the data is read as text
const myReadStream = fs.createReadStream(readPath, { encoding: "utf8" });

  myReadStream.pipe(res);
}

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started successfully at http://${HOSTNAME}:${PORT}/`);
});
