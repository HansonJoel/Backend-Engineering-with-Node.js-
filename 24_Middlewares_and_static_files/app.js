const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use("/assets", express.static("assets"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/contact/", function (req, res) {
  res.render("contact");
});

app.get("/profile/:name", function (req, res) {
  const data = {
    age: 30,
    job: "Surveyor and GIS Developer",
    hobbies: [
      "Playing the piano",
      "Reading",
      "Coding",
      "Hearing Peoples Success Stories",
      "Listening to Music",
    ],
  };

  res.render("profile", { person: req.params.name, data: data });
});

app.listen(3000);
