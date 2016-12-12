var app = require("../index")();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/name", (req, res) => {
  var { name, lastName } = req.params;
  name = name || "John"
  lastName = lastName || "Doe";

  res.send(`${name} ${lastName}`);
});

app.get("/about", (req, res) => {
  res.render("about.html");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/json", (req, res) => {
  res.json({name: "John", lastName: "Doe"});
});

app.get("/redirect", (req, res) => {
  res.redirect("/");
});

app.listen(PORT);
