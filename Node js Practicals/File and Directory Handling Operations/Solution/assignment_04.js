const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "practice_files", "note.txt");

fs.rm(filePath, { recursive: true }, (err, data) => {
  if (err) {
    console.log("File not found");
    return;
  }
  console.log("File deleted successfully");
});
