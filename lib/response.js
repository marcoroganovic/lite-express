function setContentType(type) {
  return {
    "Content-Type": type,
    "Content-Length": content.length
  }
}

function Response(res) {

  res.send = function(content) {
    res.writeHead(200, setContentType("text/html");
    res.end(content);
  }

  res.json = function(content) {
    content = JSON.stringify(content, null, 2);
    res.writeHead(200, setContentType("application/json"));
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
    res.writeHead(404, setContentType("text/html"));
    res.end(message);
  }
}

module.exports = Response;
