// Import the express library
const express = require("express");

// Create an Express app
const app = express();

// Set EJS as the template/view engine
app.set("view engine", "ejs");
app.set("views", "views");

// Route for homepage (renders index.ejs)
app.get("/", function (req, res) {
  res.render("index");
});

// Route for contact page (renders contact.ejs)
app.get("/contact/", function (req, res) {
  res.render("contact");
});

// Dynamic route for profile page
// Example: /profile/Joel → renders Joel's profile
app.get("/profile/:name", function (req, res) {
  const data = {
    age: 30,
    job: "Surveyor and GIS Developer",
    hobbies: ["Playing the piano", "Reading", "Coding", "Listening to Music"],
  };

  // Render profile.ejs and pass dynamic values
  res.render("profile", { person: req.params.name, data: data });
});

app.listen(3000);
