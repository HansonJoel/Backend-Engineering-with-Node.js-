const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "logs");

// Create the Logs folder
fs.mkdir(folderPath, { recursive: true }, (err) => {
  if (err) {
    console.log("Cannot create logs folder");
    return;
  }
  console.log("Folder created Successfully");

  // crete the files inside the logs folder
  let i = 1;
  while (i <= 5) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(folderPath, fileName);
    const content = `This is content for ${fileName}`;

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.log(`Cannot create ${fileName}`);
        return;
      }
      console.log("File created successfully");
    });

    i++;
  }
});
