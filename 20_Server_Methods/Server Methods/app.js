// Import core Node.js modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Path to the JSON file that stores book data
const booksDbPath = path.join(__dirname, "db", "books.json");

// Import route handler functions
const getAllBooks = require('./GET_method.js');
const addBook = require('./POST_method.js');
const updateBook = require('./UPDATE_method');
const deleteBook = require('./DELETE_method');

// Define server host and port
const PORT = 4000;
const HOST_NAME = "localhost";

// Create HTTP server and define routing logic
const server = http.createServer(requestHandler);
function requestHandler(req, res) {
  if (req.url === "/books" && req.method === "GET") {
    getAllBooks(req, res);        // Handle GET request

  } else if (req.url === "/books" && req.method === "POST") {
    addBook(req, res);            // Handle POST request
    
  } else if (req.url === "/books" && req.method === "PUT") {
    updateBook(req, res);         //  Handle PUT request

  } else if (req.url === "/books" && req.method === "DELETE") {
    deleteBook(req,res);          //  Handle DELETE request
  }
}

// Start the server
server.listen(PORT, HOST_NAME, () => {
    booksDB = JSON.parse(fs.readFileSync(booksDbPath, 'utf8'));
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`)
})