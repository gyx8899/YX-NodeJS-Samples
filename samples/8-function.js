// Demo1 function
function say(word)
{
	console.log('Function - ' + word);
}
function execute(someFunction, value)
{
	someFunction(value);
}
execute(say, 'Good night!');

// Demo2 anonymous function
var http = require('http');

function onRequest(request, response)
{
	response.writeHead('200', {'content-type': 'text/plain'});
	response.write('Do your best!');
	response.end();
}

http.createServer(onRequest).listen(8888);