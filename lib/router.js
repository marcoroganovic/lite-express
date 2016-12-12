var http = require("http");

var routes = {};

function Router() {

  function addRoute(method, path, callback) {
    routes[method] = routes[method] || {};
    routes[method][path] = callback;
  }

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

  var server = http.createServer(function(req, res) {
    console.log(req.method, req.url);
    var { method, url } = req;
    method = method.toLowerCase();
    var handler = routes[method][url] || undefined;

    if(handler) {
      handler(req, res);
    } else {
      notFound(req, res);
    }

  });

  function listen(port) {
    server.listen(port, () => {
      console.log("Server running on port " + port);
    });
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
