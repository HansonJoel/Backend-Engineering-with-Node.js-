const http = require("http");
const fs = require("fs");
const path = require("path");

// Path to the JSON file that stores book data
const booksDbPath = path.join(__dirname, "db", "books.json");

// Function to handle GET requests and return all books
function getAllBooks(req, res) {
  fs.readFile(booksDbPath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("An error occured");
    }
    res.end(data);             // Success: send book data as JSON
  });
}

module.exports = getAllBooks;



    