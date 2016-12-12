var http = require("http"),
    request = require("./request"),
    response = require("./response"),
    notFound = require("./not-found");

const HTTP_VERBS = ["GET", "POST", "PUT", "DELETE", "HEAD"];

var routes = {};

var server = http.createServer((req, res) => {
  
  // add params object on request object
  request(req);
  // add helper methods to response object
  response(res);

  // extract HTTP verb/method and URL from request object
  var { method, url } = req;
  method = method.toLowerCase();

  // check if there is registered route in routes object
  var handler = routes[method][url];

  if(handler) {
    handler(req, res);
  } else {
    notFound(req, res);
  }
});

function Router() {

  function addRoute(method, path, callback) {
    if(typeof callback === "function") {
      routes[method] = routes[method] || {};
      routes[method][path] = callback;
    } else {
      throw new Error("Expected function got " + typeof callback);
    }
  }
  
  function listen(port) {
    server.listen(port, () => console.log("Server running on port " + port));
  }

  var exportObj = {
    listen: listen
  };

  HTTP_VERBS.forEach(method => {
    method = method.toLowerCase();

    exportObj[method] = function(req, res) {
      addRoute(method, req, res);
    }

  });

  return exportObj;
}

module.exports = Router;
