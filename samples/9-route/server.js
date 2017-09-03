var http = require('http');
var url = require('url');

function startServer(route)
{
	function onRequest(request, response)
	{
		var pathName = url.parse(request.url).pathname;
		route(pathName);

		response.writeHead('200', {'content-type': 'text/plain'});
		response.write('Server response: OK!');
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log('Server started!');
}

exports.startServer = startServer;