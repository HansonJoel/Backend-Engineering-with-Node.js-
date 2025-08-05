const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "logs");

// Read all files in the logs directory
fs.readdir(logsDir, (err, files) => {
  if (err) {
    console.log(`Error reading the logs directory ${err}`);
    return;
  }

  // Loop through and delete each file
  files.forEach((file) => {
    const filepaths = path.join(logsDir, file);

    fs.unlink(filepaths, (err) => {
      if (err) {
        console.log(`File not found ${err}`);
        return;
      }
      console.log("Files deleted successfully");
    });
  });
});
