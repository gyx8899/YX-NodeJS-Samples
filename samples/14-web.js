//Demo1
var http1 = require('http');
var fs = require('fs');
var url = require('url');

function onRequest(request, response)
{
	var pathName = url.parse(request.url).pathname;
	var filePath = pathName.substr(1);

	console.log('Web - pathname: ' + pathName);

	fs.stat(filePath, function (err, stat) {
		if (err)
		{
			console.log('Web - error in fs path stat. ' + err);
			response.write('Web - error in fs path stat. ' + err);
		}
		else
		{
			if (stat.isFile())
			{
				fs.readFile(filePath, function (err, data) {
					if (err)
					{
						console.log('Web - error in read file: ' + err);
						response.write('Web - error in read file: ' + err);
						response.writeHead('404', {'Content-Type': 'text/html'});
					}
					else
					{
						response.writeHead('200', {'Content-Type': 'text/html'});
						response.write(data.toString());
					}
					response.end();
				});

			}
			else if (stat.isDirectory())
			{
				fs.readdir(filePath, function (err, files) {
					if (err)
					{
						console.log('Web - error in read dir: ' + err);
						response.write('Web - error in read dir: ' + err);
						response.writeHead('404', {'Content-Type': 'text/html'});
					}
					else
					{
						response.writeHead('200', {'Content-Type': 'text/html'});
						var fileNames = '';
						files.forEach(function (file) {
							fileNames += file + '\n';
						});
						response.write(fileNames);
					}
					response.end();
				})
			}
			else
			{
				response.write(data.toString());
				response.end();
			}
		}
	});
}

http1.createServer(onRequest).listen(8899);
console.log('Web server in 127.0.0.1:8899');