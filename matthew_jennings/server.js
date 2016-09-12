var http = require("http");
var fs = require('fs');

var server = http.createServer(function(request, response) {
    switch (request.url) {
        case "/":
            fs.readFile('index.html', function(err, data) {
                response.write(data);
                response.end();
            })
            break;
        case '/page-2.html':
            fs.readFile('page-2.html', function(err, data) {
                response.write(data);
                response.end();
            })
            break;
        case '/page-3.html':
            fs.readFile('page-3.html', function(err, data) {
                response.write(data);
                response.end();
            })
            break;
        case '/main.css':
        	fs.readFile("main.css", function(err, data) {
        		response.write(data.toString());
        		response.end();
        	})
        	break;
    }
})

server.listen(3000);
