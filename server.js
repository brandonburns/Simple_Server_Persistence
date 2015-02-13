'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.url === '/postPath' && (req.method === "POST" || req.method === "GET" || 
    req.method === "PUT" || req.method === "PATCH" || req.method === "DELETE")) {
    
    var input = '';

    req.on('data', function(data) {
      input += data.toString('utf-8');
    });

    req.on('end', function () {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write('Check jsonData/storage.json');
      fs.writeFile('./jsonData/storage.json', input, function (err, data) {
        if (err) {
          return console.log(err);
        }
        console.log('input > storage.json');
      });
      res.end(JSON.stringify({msg: 'data stored'}));
    });
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });
    res.end();
  }
});

server.listen(3000, function() {
  console.log('server listening');
});

module.exports = server;