module.exports = function(req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.end("<h2>404 Not Found</h2>");
}
