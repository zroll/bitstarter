var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.logger());

var readContent = function(filename) {
  return fs.readFileSync(filename);
};

app.get('/', function(request, response) {
  response.send(readContent('index.html').toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
