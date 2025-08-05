const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "logs");

fs.readdir(logsDir, (err, files) => {
  if (err) {
    console.log("Error reading the logs directory");
    return;
  }

  console.log("Files in logs directory");

  files.forEach((files) => {
    console.log(files);
  });
});
