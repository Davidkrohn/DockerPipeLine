var express = require('express');

// Constants
var PORT = 80;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello EB from Node running in Docker!\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);