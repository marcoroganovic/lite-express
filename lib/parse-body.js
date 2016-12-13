var qs = require("querystring");

module.exports = function(req, callback) {
  var formData = "";
  
  req.on("data", (chunk) => {
    formData += chunk.toString();
  });

  req.on("end", () => {
    req.body = qs.parse(formData);
    callback(req);
  });
}
