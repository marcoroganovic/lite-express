var fs = require("fs");

module.exports = function(serverPath) {

  return function staticFiles(req, res, next) {
    var file;

    try {
      file = fs.readFileSync("./" + serverPath + req.url);
    } catch(e) {
      file = null;
    }

    if(file) {
      res.end(file);
    } else {
      next();
    }
  }

}
