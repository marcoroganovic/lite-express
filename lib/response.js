var fs = require("fs"),
    ejs = require("ejs");

function setContentType(type, length) {
  return {
    "Content-Type": type,
    "Content-Length": length
  }
}

function Response(res) {

  res.send = function(content) {
    res.writeHead(200, setContentType("text/html", content.length));
    res.end(content);
  }

  res.render = function(view, data) {
    var file = ejs.renderFile("./views/" + view + ".ejs", data, function(err, str) {
        if(err) throw err;
        res.writeHead(200, setContentType("text/html", str.length));
        res.end(str);
    });
  }


  res.json = function(content) {
    content = JSON.stringify(content);
    res.writeHead(200, setContentType("application/json", content.length));
    res.end(content);
  }

  res.redirect = function(path) {
    if(typeof path === "string") {
      res.writeHead(301, {
        "Location": path
      });
      res.end();
    } else {
      throw new Error("Expected string got " + typeof path);
    }
  }

  res.error = function(content) {
    res.writeHead(404, setContentType("text/html", content.length));
    res.end(content);
  }
}

module.exports = Response;
