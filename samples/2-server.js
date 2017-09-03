var http = require('http');

http.createServer(function (request, response) {

	response.writeHead('200', {'Content-Type': 'text/plain'});
	response.end('Hello world! This nodejs server!\n');

}).listen(8888);

console.log("Server running in 127.0.0.1:8888");