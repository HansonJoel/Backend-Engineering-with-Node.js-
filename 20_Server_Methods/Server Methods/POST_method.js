const http = require("http");
const fs = require("fs");
const path = require("path");
const booksDbPath = path.join(__dirname, "db", "books.json");

// Function to handle POST requests to add a new book
function addBook(req, res) {
  const body = [];
  req.on("data", (chunk) => {     // Collect incoming data chunks from the request
    body.push(chunk);
  });
  req.on("end", () => {
    const parseBook = Buffer.concat(body).toString();
    const newBook = JSON.parse(parseBook);
    console.log(newBook);

    // Read the current list of books
    fs.readFile(booksDbPath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("An error occured");
      }
      const oldBooks = JSON.parse(data);
      const allBooks = [...oldBooks, newBook]; // Add the new book to the list

      // Save updated list back to the JSON file
      fs.writeFile(booksDbPath, JSON.stringify(allBooks), (err) => {
        if (err) {
          res.writeHead(500);
          res.end(
            JSON.stringify({
              message:
                "Internal Server Error. Could not save book to database.",
            })
          );
        }

        res.end(JSON.stringify(newBook));
      });
    });
  });
}

module.exports = addBook;