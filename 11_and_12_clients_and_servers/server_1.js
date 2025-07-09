const http = require("http");

const HOSTNAME = "localhost";
const PORT = 8000;

// Asynchronous server handling
function requestHandler(req, res) {     
  // console.log(req)
  console.log("incoming request received");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js Server!, this is the end");
}

const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started successfully at http://${HOSTNAME}:${PORT}/`);
});
