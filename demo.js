var micro = require("./index"),
    app = micro();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

app.get("/json", (req, res) => {
  res.json({name: "John", lastName: "Doe"});
});

app.get("/redirect", function(req, res) {
  res.redirect("/");
});

app.listen(PORT);
