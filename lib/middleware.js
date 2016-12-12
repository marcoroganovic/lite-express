function Middleware() {
  
  var mwStack = [];

  


  function run(req, res) {
    var next = makeNext(req, res);
    next();
  }
}

module.exports = Middleware;
