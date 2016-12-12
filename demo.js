var micro = require("./index"),
    app = micro();

const PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end("Homepage");
});

app.get("/contact", function(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end("/contact");
});

app.listen(PORT);
