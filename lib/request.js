var url = require("url"),
    qs  = require("querystring");

function Request(req) {
  req.params = qs.parse(url.parse(req.url).query);
}

module.exports = Request;
