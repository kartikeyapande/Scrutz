var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'script.js'));
});


var port = 8080; 
app.listen(8080, function () {
  console.log('Scrutz listening on port '+port);
});
