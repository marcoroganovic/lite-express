var http = require("http");

var routes = {};

var server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  // extract HTTP verb/method and URL from request object
  var { method, url } = req;
  method = method.toLowerCase();

  // check if there is registered route in routes object
  var handler = routes[method][url] || undefined;

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

  // define common REST methods
  function get(path, callback) {
    addRoute("get", path, callback);
  }

  function post(path, callback) {
    addRoute("post", path, callback);
  }

  function put(path, callback) {
    addRoute("put", path, callback);
  }

  function del(path, callback) {
    addRoute("delete", path, callback);
  }
  
  function notFound(req, res) {
    res.writeHead(404, { 
      "Content-Type": "text/html"
    });

    res.end("<h1>404 Not Found</h1");
  }

  function listen(port) {
    server.listen(port, () => console.log("Server running on port " + port));
  }

  return {
    get: get,
    post: post,
    put: put,
    delete: del,
    listen: listen
  }
}

module.exports = Router;
