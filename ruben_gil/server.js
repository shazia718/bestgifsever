var http = require('http');
var fs = require('fs');


var server = http.createServer(function(request, response){
	var url = request.url;

	if(url === '/'){
		fs.readFile('index.html', function(err, data){
			response.writeHead(200, {"Content-Type": "text/html"})
			response.write(data);
			response.end();
		})
	} else if(url === '/page-2'){
		fs.readFile('page-2.html', function(err, data){
			response.writeHead(200, {"Content-Type": "text/html"})
			response.write(data);
			response.end();
		})
	} else if(url === '/page-3'){
		fs.readFile('page-3.html', function(err, data){
			response.writeHead(200, {"Content-Type": "text/html"})
			response.write(data);
			response.end();
		})
	} else if(url === '/page-4'){
		fs.readFile('page-4.html', function(err, data){
			response.writeHead(200, {"Content-Type": "text/html"})
			response.write(data);
			response.end();
		})
	} else if(url === '/page-5'){
		fs.readFile('page-5.html', function(err, data){
			response.writeHead(200, {"Content-Type": "text/html"})
			response.write(data);
			response.end();
		})
	} else if(url === '/app.js'){
		fs.readFile('app.js', function(err, data){
			response.writeHead(200, {"Content-Type": "application/javascript"})
			response.write(data);
			response.end();
		})
	} else if(url === '/style.css'){
		fs.readFile('style.css', function(err, data){
			response.writeHead(200, {"Content-Type": "text/css"})
			response.write(data);
			response.end();
		})
	}
})

server.listen(3000);