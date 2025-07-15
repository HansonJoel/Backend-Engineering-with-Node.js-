// DELETE METHOD

const http = require("http");
const fs = require("fs");
const path = require("path");
const booksDbPath = path.join(__dirname, "db", "books.json");

function deleteBook(req, res) {
    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk)
    })

    req.on("end", () => {
        const parsedBook = Buffer.concat(body).toString()
        const detailsToUpdate = JSON.parse(parsedBook)
        const bookId = detailsToUpdate.id

  fs.readFile(booksDbPath, "utf8", (err, books) => {
      if (err) {
          res.writeHead(400)
          res.end("An error occured")
      }

      const booksObj = JSON.parse(books)

      const bookIndex = booksObj.findIndex(book => book.id === bookId)

      if (bookIndex === -1) {
          res.writeHead(404)
          res.end("Book not found")
          return
      }

       // Remove the book from the array
      booksObj.splice(bookIndex, 1)

      fs.writeFile(booksDbPath, JSON.stringify(booksObj), (err) => {
          if (err) {
              res.writeHead(500);
              res.end(JSON.stringify({
                  message: 'Internal Server Error. Error deleting book.'
              }));
          }

          res.writeHead(200)
          res.end("Book deleted successfully");
      });

  })

})
}

module.export = deleteBook;