var micro = require("../index"),
    serveStatic = require("./static");

var app = micro();

const PORT = process.env.PORT || 8080;

function logger(req, res, next) {
  console.log(req.method, req.url)
  next();
}

app.use(logger);
app.use(serveStatic("public"));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/about", (req, res) => {
  var data = {
    name: req.params.name || "John",
    lastName: req.params.lastName || "Doe",
    pageTitle: function() {
      return this.name + " " + this.lastName
    }
  }

  res.render("about", data);
});


app.get("/json", (req, res) => {
  res.json({
    name: "John", 
    lastName: "Doe"
  });
});

app.get("/redirect", (req, res) => {
  res.redirect("/");
});

app.listen(PORT);
