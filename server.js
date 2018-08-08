var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('welcome to pagarba streamiot');
});
server.listen(6667);
