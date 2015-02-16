'use strict';

var http = require('http'),
    url = require('url'),
    requestRoutes = require('./lib/requestRouter.js'),
    routes = [],
    App = function(){};

var server = http.createServer(function(req, res) {
  var fullPath = url.parse(req.url).pathname,
      fileStart = Number(fullPath.lastIndexOf('/')) +1,
      firstSlash = fullPath.indexOf('/'),
      lastSlash = fullPath.lastIndexOf('/'),
      path = fullPath.substr(firstSlash, lastSlash),
      fileName = fullPath.substr(fileStart, fullPath.length) + '.json';

  if(routes.indexOf(path)) {
    requestRoutes[req.method](req, res, fileName);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });
    res.write('page not found');
    res.end();
  }    
});

App.prototype.work = function(address, callback) {
  server.listen(address, callback);
};

App.prototype.add = function(route) {
  routes.push(route);
};

routes.push('testing');

module.exports = new App();