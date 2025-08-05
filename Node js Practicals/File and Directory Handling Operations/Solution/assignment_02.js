const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "practice_files", "note.txt"); // got the filepath

// read the file and display the result on the console
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log("There is an error reading the file");
    return;
  }
  console.log(data);
});
