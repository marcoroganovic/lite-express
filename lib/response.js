function Response(res) {
  res.send = function(content) {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": content.length
    });
    res.end(content);
  }

  res.json = function(content) {
    content = JSON.stringify(content, null, 2);
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Content-Length": content.length
    });
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

  res.error = function(message) {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "Content-Lenght": message.length
    });
    res.end(message);
  }
}

module.exports = Response;
