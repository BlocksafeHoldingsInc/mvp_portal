#!/usr/bin/env nodejs

var http = require('http');
var fs = require('fs');
var url = require("url");
var path = require('path');
var mime = require('mime');

var log = console.log;
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());


var server = http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;
    switch (path) {
        case '/':
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write("This is bip Test... Your Money is all gone... Sorry.. Try Again...");
            response.end();
            break;
        case '/index.html':
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        case '/src/' :
            var dir = "/src";
            var uri = url.parse(req.url).pathname;
            if (uri == "/")
             {
               uri = "index.html";
             }
            var filename = path.join(dir, uri);
            log(filename);
            log(mime.lookup(filename));
            fs.readFile(__dirname + filename,
            function (err, data)
             {
              if (err)
             {
                res.writeHead(500);
                return res.end('Error loading index.html');
             }
             log(data);
             log(filename + " has read");
             res.setHeader('content-type', mime.lookup(filename));
             res.writeHead(200);
             res.end(data);
        });
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }
});
server.listen(6764, '0.0.0.0');
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
 });
