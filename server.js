var express = require('express');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'my first webpage.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('contact/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/Calculator', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Calculator.html'));
});

app.get('/stylesheet.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stylesheet.css'));
});

app.get('/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'script.js'));
});


var port = process.env.PORT ||  8080; 
app.listen(port, function () {
  console.log('Scrutz listening on port '+port);
});
