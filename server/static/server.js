var express = require('express'),
    app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/../../app'));
});

app.use(function(req, res) {
  var newUrl = req.protocol + '://' + req.get('Host') + '/' + req.url;
  return res.redirect(newUrl);
});

module.exports = app;