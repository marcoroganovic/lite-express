function Middleware() {
  
  var middlewares = [];

  var current = 0;

  function makeNext(req, res, middlewares) {

    function next() {
      var nextHandler = middlewares[current];
      current++;
      if(nextHandler) {
        nextHandler(req, res, next);
      } else {
        current = 0;
        return
      }
    }

    return next;
  }


  function run(req, res) {
    var next = makeNext(req, res, middlewares);
    next();
  }

  function use(handler) {
    middlewares.push(handler);
  }

  return {
    use: use,
    run: run
  }
}

module.exports = Middleware;
