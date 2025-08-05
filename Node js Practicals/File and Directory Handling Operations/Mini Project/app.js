const fs = require("fs");
const path = require("path");

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Define folder and file paths
const journalDir = path.join(__dirname, "journal");
const filePath = path.join(journalDir, `${today}.txt`);
const content = `Journal entry for ${today}\n`;

// Create the journal folder if it doesn't exist
if (!fs.existsSync(journalDir)) {
  fs.mkdirSync(journalDir);
}

// Append or create the journal file
fs.appendFile(filePath, content, (err) => {
  if (err) {
    console.error("Error writing journal entry:", err);
    return;
  }
  console.log(`Journal entry written to ${filePath}`);
});
