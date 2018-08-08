//nodejs

var instructionsNewVisitor = function(req, res) {
res.writeHead(200);
res.end('Hi, welcome to pagarba streamiot ');
}

var server = http.createServer(instructionsNewVisitor);

server.listen(6667);
