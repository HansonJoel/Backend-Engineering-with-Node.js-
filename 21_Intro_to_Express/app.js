const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", function (req, res) {
  res.send("This is the Home Page");
});

app.get("/contact", function (req, res) {
  res.send("This is the Contact Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
