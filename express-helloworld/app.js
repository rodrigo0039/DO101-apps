var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Computação em Nuvem - 2025.1!\n');
});

app.get('/teste', function (req, res) {
  res.send('Testando rota de teste ...\n');
});

app.get('/teste2', function (req, res) {
  res.send('Testando rota de teste2 ...\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

