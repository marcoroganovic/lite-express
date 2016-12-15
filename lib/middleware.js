var middlewares = [],
    current = 0;

function Middleware() {
  
  function makeNext(req, res, middlewares) {

    return function next() {
      var nextHandler = middlewares[current];
      current++;
      if(nextHandler) {
        nextHandler(req, res, next);
      } else {
        current = 0;
        return;
      }
    }
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
