var http        = require("http"),
    request     = require("./lib/request"),
    response    = require("./lib/response"),
    findHandler = require("./lib/router").findHandler,
    Router      = require("./lib/router").Router,
    middleware  = require("./lib/middleware")(),
    notFound    = require("./lib/not-found");

var server = http.createServer((req, res) => {

  request(req);
  response(res);

  middleware.run(req, res);
  var handler = findHandler(req);

  if(handler) {
    handler(req, res);
  } else {
    notFound(req, res);
  }

});

function listen(port) {
  server.listen(port, () => console.log("Server running on port " + port));
}

module.exports = function() {
  var router = Router();
  router.listen = listen;
  router.use = middleware.use;
  return router;
}
