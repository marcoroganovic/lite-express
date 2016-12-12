var micro = require("./index"),
    app = micro();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/name", (req, res) => {
  res.send(req.params.name + " " + req.params.lastName);
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
