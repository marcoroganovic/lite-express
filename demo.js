var micro = require("./index"),
    app = micro();

const PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
  res.send("Hello");
});

app.get("/contact", function(req, res) {
  res.send("Contact page");
});

app.get("/redirect", function(req, res) {
  res.redirect("/");
});

app.listen(PORT);
