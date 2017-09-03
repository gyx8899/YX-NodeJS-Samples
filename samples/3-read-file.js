var fs = require('fs');

// 阻塞代码
var helloWorld = fs.readFileSync('1-hello-world.js');

console.log(helloWorld.toString());

//非阻塞代码
fs.readFile('2-server.js', function (err, data) {
	if (err)
		return console.error(err);
	console.log(data.toString());
});

console.log('End!');