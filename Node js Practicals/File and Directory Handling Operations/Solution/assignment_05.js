const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "practice_files");
const tempPath = path.join(dirPath, "temp.txt");
const finalPath = path.join(dirPath, "final.txt");

fs.writeFile(tempPath, "This is a Temporary file", (err, data) => {
  if (err) {
    console.log("error creating temp.txt file");
    return;
  }
  console.log("temp.txt file is created");

  fs.rename(tempPath, finalPath, (err, data) => {
    if (err) {
      console.log("error renaming file");
      return;
    }
    console.log("file has been renamed Successfully");
  });
});
