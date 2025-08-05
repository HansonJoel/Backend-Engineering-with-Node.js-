const fs = require("fs");
const path = require("path");

// Define the directory and file paths
const dirPath = path.join(__dirname, "practice_files");
const filePath = path.join(dirPath, "note.txt");

// Created the Folder
fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) {
    console.log("There was an error creating the folder");
    return;
  }
  console.log("Folder created Successfully");

  // write a short note into the note.txt
  fs.writeFile(
    filePath,
    "How to create and write to a file in node.js",
    (err) => {
      if (err) {
        console.log("There was an error creating the file");
        return;
      }
      console.log("File created successfully");
    }
  );
});
