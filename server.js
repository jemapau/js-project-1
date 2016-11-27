var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hola mundo!');
})

app.listen(3000, function (err) {
  if (err) return console.log('There was an error'), process.exit(1);

  console.log('On the port 3000');
})
