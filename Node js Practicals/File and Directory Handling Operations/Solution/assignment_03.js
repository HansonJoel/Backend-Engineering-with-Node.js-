const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "practice_files", "note.txt");

fs.appendFile(filePath, "\nThis line was added later.", (err, data) => {
  if (err) {
    console.log("There was an error appending to the file");
  }
  console.log("File appended Successfully");
});
