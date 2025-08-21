const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.get("/", function (req, res) {
  res.send("This is the Home Page");
});

app.get("/contact", function (req, res) {
  res.send("This is the Contact Page");
});

// route parameters
app.get("/profile/:id", function (req, res) {
  res.send("You requested to see a profile with the id of " + req.params.id);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
