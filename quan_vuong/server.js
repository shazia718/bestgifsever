var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response) {
    // response.writeHead(200, {
    //     "Content-type": "text/html"
    // })

    var url = request.url;
    console.log("url: ", url);

    if (url === "/anime") {
        fs.readFile("anime.html", function(err, data) {
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data); // don't need toString(); ?
            response.end("anime.html served");
        })
    } else if (url === "/funny") {
        fs.readFile("funny.html", function(err, data) {
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end("funny.html served");
        })
    } else if (url === "/random") {
        fs.readFile("random.html", function(err, data) {
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end("random.html served");
        })
    } else if (url === "/") {
        fs.readFile("index.html", function(err, data) {
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end("index.html served");
        })
    } else if (url === "/main.css") {
        fs.readFile("main.css", function(err, data) {
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(data);
            response.end();
        })
    } else if (url === "/app.js") {
        fs.readFile("app.js", function(err, data) {
            if (err) throw err;
            response.writeHead(200, { 'Content-Type': 'text/javascript' });
            response.write(data);
            // response.end("app.js served"); // this will append the string to app.js code !!
            response.end();
        })
    } else {
        response.write("<p> 404 Page Not Found </p>");
        response.end();
    }
})

server.listen(9000);
