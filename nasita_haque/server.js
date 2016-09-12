var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    var url = request.url
    if (url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('index.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/main.css') {
        fs.readFile('main.css', function(err, data) {
            response.write(data);
            if (err) throw err;
            response.end();
        })
    } else if (url === '/page-2.html') {
        fs.readFile('page-2.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-3.html') {
        fs.readFile('page-3.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-4.html') {
        fs.readFile('page-4.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })
    } else if (url === '/page-5.html') {
        fs.readFile('page-5.html', function(err, data) {
            response.write(data.toString());
            response.end();
        })

    } else {
        response.write('<h1>404 <p>Page Not Found</p></h1>'); 
        response.end()
    }
});
server.listen(3000);
