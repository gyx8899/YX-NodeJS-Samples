// Demo1 get
// var http1 = require('http');
// var url1 = require('url');
// var util1 = require('util');
//
// http1.createServer(function (request, response) {
// 	response.writeHead('200', {'Content-Type': 'text-plain'});
// 	// parse url
// 	var params = url1.parse(request.url, true).query;
// 	response.write('WebSite: ' + params.name);
// 	response.write('\n');
// 	response.write('Url: ' + params.url);
//
// 	response.end();
// }).listen(9394);
// console.log('Get: 127.0.0.1: 9394');

// Demo2 post
var http2 = require('http');
var queryStr = require('querystring');

var postHTML = '<html><head><meta charset="utf-8"><title>Node.js 实例</title></head><body> <form method="post"> 网站名： <input name="name"><br>网站 URL： <input name="url"><br> <input type="submit"></form></body></html>';
http2.createServer(function (request, response){
	var body = '';
	request.on('data', function (trunk) {
		body += trunk;
	});
	request.on('end', function () {
		body = queryStr.parse(body);
		response.writeHead('200', {'Content-Type': 'text/html; charset=utf-8'});

		if (body.name && body.url)
		{
			response.write('WebSite: ' + body.name);
			response.write('\n');
			response.write('Url: ' + body.url);
		}
		else
		{
			response.write(postHTML);
		}
		response.end();
	})
}).listen(8384);
console.log('Post: 127.0.0.1:8384');