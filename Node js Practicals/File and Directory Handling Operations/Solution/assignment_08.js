const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "logs", "log1-copy.txt");
const destinationDirPath = path.join(__dirname, "logs", "archive");
const destinationPath = path.join(destinationDirPath, "log1-copy.txt");

fs.mkdir(destinationDirPath, { recursive: true }, (err) => {
  if (err) {
    console.log(`There is an error creating the directory ${err}`);
  }
  console.log(`archive subdirectory was created successfully`);
});

fs.rename(folderPath, destinationPath, (err) => {
  if (err) {
    console.log(`There was an error moving the file ${err}`);
  }
  console.log("File moved successfully");
});
