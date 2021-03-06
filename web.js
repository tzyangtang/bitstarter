var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = fs.readFileSync('index.html', 'utf8');
app.get('/', function(request, response) {
  response.send(buf.toString("utf-8"));
});

var port = process.env.PORT || 8090;
app.listen(port, function() {
  console.log("Listening on " + port);
});
