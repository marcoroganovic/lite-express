var url = require("url"),
    qs  = require("querystring");

function Request(req) {
  if(req.url.indexOf("?") !== -1) {
    req.params = qs.parse(url.parse(req.url).query);
    req.url = req.url.split("?")[0];
  } else {
    req.params = {};
  }
}

module.exports = Request;
