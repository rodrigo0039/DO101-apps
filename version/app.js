const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'Essa é a versão 14 desta aplicação (Usando WebHooks).' + '\n';

    //send the response to the client
    res.send(response);

});


app.get('/teste', function (req, res) {

    response = 'Testando uma nova rota desta aplicação (Usando WebHooks).' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
