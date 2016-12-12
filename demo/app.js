var app = require("../index")();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Homepage");
});


app.get("/about", (req, res) => {
  var data = {
    name: req.params.name || "John",
    lastName: req.params.lastName || "Doe"
  }

  res.render("about", data);
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
