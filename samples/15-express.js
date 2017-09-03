// Demo1
var express1 = require('express');
var app1 = express1();
var bodyParser = require('body-parser');

// Relative path
// http://[host]:[port]/samples/[files]
app1.use(express1.static('../samples'));

// Response for host get request
app1.get('/', function (request, response) {
	response.send('Home Get request!');
});

// Response for host post request
app1.post('/', function (request, response) {
	response.send('Home post request!');
});

// Response for '/del_user' get request
app1.get('/del_user', function (request, response) {
	console.log('/del_user response Delete request');
	response.send('Delete Page!');
});

// Response for '/list_user' get request
app1.get('/list_user', function (request, response) {
	console.log('/list_user response List request');
	response.send('List page!');
});

// Response for '/ab*cd' Regular Expression direction
app1.get('/ab*cd', function (request, response) {
	console.log('/ab*cd response request');
	response.send('Reg Exp!');
});

// Response to download specify file
app1.get('/output1', function (request, response) {
	response.sendFile(__dirname + '/' + 'out/output1.txt');
});

// Response get submit
app1.get('/process_get', function (request, response)
{
	var responseInfo = {
		first_name: request.query.first_name,
		last_name: request.query.last_name
	};
	console.log("Submit get: " + JSON.stringify(responseInfo));
	response.send(JSON.stringify(responseInfo));
});


var urlEncodeParser = bodyParser.urlencoded({extended: false});
app1.post('/process_post', urlEncodeParser, function (request, response)
{
	var responseInfo = {
		first_name: request.body.first_name,
		last_name: request.body.last_name
	};
	console.log("Submit query: " + JSON.stringify(request.query));
	console.log("Submit post: " + JSON.stringify(responseInfo));
	response.send(JSON.stringify(responseInfo));
});

var server1 = app1.listen(8890, function () {
	var host = server1.address().address;
	var port = server1.address().port;

	console.log('App : http://%s:%s', host, port);
});

// Demo2 upload file
var express2 = require('express');
var app2 = express2();
var fs2 = require('fs');

var bodyParser2 = require('body-parser');
var multer2 = require('multer');
var cookieParser2 = require('cookie-parser');

app2.use(express2.static('../samples'));
app2.use(bodyParser2.urlencoded({extended: false}));
app2.use(multer2({dest:'/upload/'}).array('image'));
app2.use(cookieParser2());

app2.post('/upload_file', function (request, response)
{
	console.log("Info: " + JSON.stringify(request.files[0]));

	var dest_file = __dirname + '/15-express-upload/' + request.files[0].originalname;
	console.log('Dest file: ' + dest_file);

	fs2.readFile(request.files[0].path, function (err, data) {
		fs2.writeFile(dest_file, data, function (err) {
			var responseInfo = {};
			if (err)
			{
				console.log('Error in Read file: ' + err);
			}
			else
			{
				responseInfo = {
					message: 'File upload success',
					fileName: request.files[0].originalname
				};
			}
			console.log('Response: ' + JSON.stringify(responseInfo));
			response.send(JSON.stringify(responseInfo));
		});

	})
});

var server2 = app2.listen('8891', function () {
	var host = server2.address().address;
	var port = server2.address().port;

	console.log('App : http://%s:%s', host, port);
});
