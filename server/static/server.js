var express = require('express'),
    app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/../../app'));
});

app.get('*', function(request, response){
  response.sendfile('app/index.html');
});

module.exports = app;