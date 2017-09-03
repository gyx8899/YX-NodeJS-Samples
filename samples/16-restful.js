var express1 = require('express');
var app1 =express1();
var fs1 = require('fs');

var filePath = __dirname + '/16-restful-user.json';

app1.get('/list-user', function (request, response)
{
	fs1.readFile(filePath, 'utf8', function (err, data){
		if (err)
		{
			console.log('list-user - Restful error in Read file: ' + err);
		}
		console.log('list-user - File: ' + filePath);
		// console.log('User: ' + data);
		response.send(data);
	})
});

var addedUser = {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
};
app1.get('/add-user', function (request, response) {
	fs1.readFile(filePath, 'utf8', function (err, data) {
		if (err)
		{
			console.log('add-user - Restful error in Read file: ' + err);
		}
		// console.log('Data: ' + JSON.stringify(data));
		console.log('add-user - Data: ' + data);
		var users = JSON.parse(data);
		if (users['user4'] === undefined)
		{
			users['user4'] = addedUser;
			fs1.writeFile(filePath, JSON.stringify(users), function (err) {
				if (err)
				{
					console.log("add-user - Restful error in write file: " + err);
				}
				else
				{
					response.send(JSON.stringify(users));
				}
			})
		}
		else
		{
			response.send('add-user - Already added. ' + JSON.stringify(users));
		}
	})
});

app1.get('/delete-user', function (request, response) {
	fs1.readFile(filePath, 'utf8', function (err, data) {
		if (err)
		{
			console.log('delete-user - Restful error in Read file: ' + err);
		}
		else
		{
			var users = JSON.parse(data);
			console.log("delete-user - before delete: " + JSON.stringify(users));
			delete users['user4'];
			console.log("delete-user - after delete: " + JSON.stringify(users));

			fs1.writeFile(filePath, JSON.stringify(users), function (err) {
				if (err)
				{
					console.log("remove-user - Restful error in write file: " + err);
				}
				else
				{
					response.send(JSON.stringify(users));
				}
			});
		}
	})
});

// Attention:
// This '/:id' will result app1.get function lose efficacy.
// Make sure this '/:id' is the last one before app1.listen();
app1.get('/:id', function (request, response) {
	fs1.readFile(filePath, 'utf8', function (err, data) {
		if(err)
		{
			console.log("/:id - Restful error in Read file: " + err);
		}
		else
		{
			console.log("/:id - Data: " + data);
			data = JSON.parse(data);
			var userData = data['user' + request.params.id];
			if (userData)
			{
				console.log('/:id - User: ' + JSON.stringify(userData));
				response.send(JSON.stringify(userData));
			}
			else
			{
				console.log('/:id - User: Not found');
				response.send('User Not Found!');
			}
		}
	})
});



var server1 = app1.listen('8892', function () {
	var host = server1.address().address;
	var port = server1.address().port;

	console.log('Restful: ' + host + ':' + port);
});