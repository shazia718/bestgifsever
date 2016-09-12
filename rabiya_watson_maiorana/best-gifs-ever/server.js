var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    var url = request.url;

    console.log('URL', url);
    //Only need 'requst.on' if we have POST requests coming in to our site
    request.on('data', function(dataChunk) {
        console.log(dataChunk.toString());
    })

    if (url === '/') {
        fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/index') {
        fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();
        }) 
    } else if (url === '/page-2') {
        fs.readFile('page-2.html', function(err, data) {
            response.write(data.toString());
            response.end();
        }) 
    } else if (url === '/page-3') {
        fs.readFile('page-3.html', function(err, data) {
            response.write(data.toString());
            response.end();
        }) 
    } else if (url === '/page-4') {
        fs.readFile('page-4.html', function(err, data) {
            response.write(data.toString());
            response.end();
        }) 
    } else if (url === '/page-5') {
        fs.readFile('page-5.html', function(err, data) {
            response.write(data.toString());
            response.end();
        }) 
    } else if (url === '/random') {
        fs.readFile('random.html', function(err, data) {
            response.write(data.toString());
            response.end();
        }) 
    } else if (url === '/trending') {
        fs.readFile('trending.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })         
    } else if (url === '/main.css') {
        fs.readFile('main.css', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/app.js') {
        fs.readFile('app.js', function(err, data) {
            response.write(data.toString());
            response.end();
        })                                                                        
    } else {
        response.write('<h1>404</h1><br><p>Page not found</p>');
        response.end();
    }
});

server.listen(3000);