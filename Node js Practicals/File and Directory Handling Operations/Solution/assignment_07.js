const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "logs", "log1.txt");
const destinationPath = path.join(__dirname, "logs", "log1-copy.txt");

fs.copyFile(sourcePath, destinationPath, (err) => {
  if (err) {
    console.log("Error copying the file");
  }
  console.log("The file has been copied Successfully");
});
