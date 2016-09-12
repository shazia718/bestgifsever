var http = require('http');
var fs = require('fs');

var server =
    http.createServer(function(request, response) {
        //Get our url
        var url = request.url;
        //create an if/else for different URLs
        //set up our first if statement for our '/' home page
        if (url === '/') {
            //todo: use fs to read our index.html page and write it to the browser
            fs.readFile('index.html', function(err, data) {
                response.write(data.toString());
                response.end();
            })
        } else if (url === '/page-2') {
            //todo: use fs to read our page-2.html page and write it to the browser
            fs.readFile('page-2.html', function(err, data) {
                response.write(data.toString());
                response.end();
            })

        } else if (url === '/page-3') {
            //todo: use fs to read our page-3.html page and write it to the browser
            fs.readFile('page-3.html', function(err, data) {
                response.write(data.toString());
                response.end();
            })
        } else if (url ==='/main.css') {
        	fs.readFile('main.css', function(err, data) {
        		response.write(data.toString());
        		response.end();
        	})
        // } else if (url ==='/page-2.css') {
        //     fs.readFile('page-2.css', function(err, data) {
        //         response.write(data.toString());
        //         response.end();
        //     })
        // } else if (url ==='/page-3.css') {
        //     fs.readFile('page-3.css', function(err, data) {
        //         response.write(data.toString());
        //         response.end();
        //     })
        }

        else {
            response.write('FOH OH FOH ERR0R');
            response.end();
        }
    })
server.listen(3000)


//get our url and create an if/else for different URLs
//set up our first if statement for our "." page
//use fs tp read the index file and write the data
