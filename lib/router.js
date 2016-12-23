const HTTP_VERBS = require("./methods");

var routes = {};

function Router() {

  function addRoute(method, path, callback) {
    if(typeof callback === "function") {
      routes[method] = routes[method] || {};
      routes[method][path] = callback;
    } else {
      throw new Error("Expected function got " + typeof callback);
    }
  }
 
  var exportObj = {};

  HTTP_VERBS.forEach(method => {
    method = method.toLowerCase();

    exportObj[method] = function(req, res) {
      addRoute(method, req, res);
    }

  });

  return exportObj;
}

module.exports.findHandler = function(req) {
  var { method, url } = req;
  method = method.toLowerCase();
  return routes[method][url];
}

module.exports.Router = Router;
