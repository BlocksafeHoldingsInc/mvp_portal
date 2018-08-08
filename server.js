 var connect = require('connect')
   , http = require('http')
   , https = require('https');

 var app = connect();

 http.createServer(app).listen(6667);
 https.createServer(options, app).listen(443);
