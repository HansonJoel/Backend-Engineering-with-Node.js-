const http = require("http");
const fs = require("fs");
const path = require("path");
const booksDbPath = path.join(__dirname, "db", "books.json");

function updateBook(req, res){
  const body = []
      req.on("data", (chunk) => {         // Collect the incoming data
          body.push(chunk)
      })
      req.on("end", () => {
          const parsedBook = Buffer.concat(body).toString()
          const detailsToUpdate = JSON.parse(parsedBook)
          const bookId = detailsToUpdate.id    // ID of the book to update

          // Read existing books
          fs.readFile(booksDbPath, "utf8", (err, books) => {
              if (err) {
                  res.writeHead(400)
                  res.end("An error occured")
              }  

              const booksObj = JSON.parse(books)
            // Find index of the book to update
            const bookIndex = booksObj.findIndex(book => book.id === bookId)
            
            // Handles error if book is not found
            if (bookIndex === -1){
              res.writeHead(404)
              res.end('Book with specified id not found!')
              return
            }
            const updatedBook = { ...booksObj[bookIndex], ...detailsToUpdate }
            booksObj[bookIndex] = updatedBook

            fs.writeFile(booksDbPath, JSON.stringify(booksObj), (err) => {
              if (err) {
                  res.writeHead(500);
                  res.end(JSON.stringify({
                      message: 'Internal Server Error. Could not save book to database.'}));
              }
              res.writeHead(200)
              res.end("Update successfull!");
          });
          })
        })    
}
module.export = updateBook;