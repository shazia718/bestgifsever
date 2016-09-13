var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, resp){
	var url = req.url;
	if(url === '/'){
		fs.readFile('index.html',function(err,data){
			resp.write(data);
			resp.end();
		})
	}
	else if(url === '/page-2'){
		fs.readFile('page-2.html',function(err,data){
			resp.write(data);
			resp.end();
		})
	}
	else if(url === '/page-3'){
		fs.readFile('page-3.html', function(err,data){
			resp.write(data);
			resp.end();
		})
    }
    else if(url === '/main.css'){
    	fs.readFile('main.css',function(err,data){
    		resp.write(data.toString());
    		resp.end();

    	})
    }
    else if(url === '/app.js'){
    	fs.readFile('app.js', function(err,data){
    		resp.write(data);
    		resp.end();
    	})
    }
    else if(url === '/page-4'){
    	fs.readFile('page-4.html',function(err,data){
    		resp.write(data.toString())
    		resp.end();
    	})
    }
	else{
       resp.write('<h1> 404 No such file found</h1>');
       resp.end();
	}
});
server.listen(3000)