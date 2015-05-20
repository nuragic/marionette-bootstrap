var jsonServer = require('json-server')

var server = jsonServer.create() // Returns an Express server
var router = jsonServer.router(__dirname + '/db.json') // Returns an Express router

server.use(jsonServer.defaults) // logger, static and cors middlewares
server.use(router) // Mount router on '/'

module.exports = server;
