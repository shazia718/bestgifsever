var http = require('http')
 var fs = require('fs')

  var server = http.createServer(function(request, response){
 	var url = request.url;

	if(url === '/'){
 		fs.readFile('index.html', function(err,data){
 			response.write(data.toString());
 			response.end();
 		});
 	}

 	else if(url === '/best.css'){
 		fs.readFile('best.css', function(err,data){
 			response.write(data);
 			response.end();
 		});
 	}

 	else if(url === '/classydoge.gif'){
 		fs.readFile('classydoge.gif', function(err, data){
 			response.write(data);
 			response.end();
 		});
 	}

 	else if(url === '/classysloth.gif'){
 		fs.readFile('classysloth.gif', function(err, data){
 			response.write(data);
 			response.end();
 		});
 	}

	else if(url === '/classykat.gif'){
 		fs.readFile('classykat.gif', function(err, data){
 			response.write(data);
 			response.end();
 		});
 	}

 	else if(url === '/page-2'){
 		fs.readFile('page-2.html', function(err, data){
 			response.write(data.toString());
 			response.end();
 		});
 	}

 	else if(url === '/page-3'){
 		fs.readFile('page-3.html', function(err,data){
 			response.write(data.toString());
 			response.end();
 		});
 	}


// else{
// 	 response.write('<h2> 404 Error</h2>' + '\n' + 'Page not found')
// }
// });
 	else{

 		response.write('<h2>'+ '404 Error. Page not found'+'</h2>' );
 		response.end();
 	}


 	
 })

 

server.listen('3000',function(){console.log('server is listening on port 3000')})		
 	