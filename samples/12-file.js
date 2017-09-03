// Demo1 read
var fs1 = require('fs');
fs1.readFile('in/input2.txt', function (err, data) {
	if (err)
	{
		console.log('File - error: ' + err);
	}
	console.log('File - Async read input2.txt: ' + data);
});

console.log('File - Async read input2.txt!');

var inputData = fs1.readFileSync('in/input2.txt');
console.log('File - Sync  read input2.txt: ' + inputData);

// Demo2 open
var fs2 = require('fs');
fs2.open('in/input2.txt', 'r+', function (err, fd) {
	if (err)
	{
		return console.error('File - error: ' + err);
	}
	console.log('File - input2.txt:' + fd);
});

// Demo3 stat
var fs3 = require('fs');
var util = require('util');

fs3.stat('in/input2.txt', function (err, stat) {
	if (err)
	{
		return console.log('File - err: ' + err);
	}

	console.log('File - stat: ' + util.inspect(stat));
	console.log('File - stat: ' + stat.isFile());
	console.log('File - stat: ' + stat.isDirectory());
	console.log('File - stat: ' + stat.isBlockDevice());
	console.log('File - stat: ' + stat.isCharacterDevice());
	console.log('File - stat: ' + stat.isSymbolicLink());
});

// Demo4 open read close
var fs4 = require('fs');
var buf = new Buffer(1024);

fs4.open('in/input2.txt', 'r+', function (err, fd) {
	if (err)
	{
		console.log('File - ' + err);
	}

	fs4.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
		if (err)
		{
			console.log('File - ' + err);
		}
		if (bytes > 0)
		{
			console.log('File - read: ' + buf.slice(0, bytes).toString());
		}

		fs4.close(fd, function (err) {
			if (err)
			{
				console.log(err);
			}
			console.log('File - close OK');
		})
	})
});

// fs.ftruncate(fd, len, callback)
// fs.unlink(path, callback)
// fs.mkdir(path[, mode], callback)
// fs.readdir(path, callback)
// fs.rmdir(path, callback)
// Demo5
var fs5 = require('fs');

fs5.mkdir(__dirname + '/mkdir', function (err) {
	if (err)
	{
		console.log('File5 - mkdir-Error: ' + err);
	}
	fs5.writeFile(__dirname + '/mkdir/text1.txt', 'Ha ha text.txt', function (err) {
		if (err)
		{
			console.log('File5 - createFile-Error: ' + err);
		}
		var readData = fs5.readFileSync(__dirname + '/mkdir/text1.txt');
		console.log('File5 - read: ' + readData);

		fs5.unlink(__dirname + '/mkdir/text1.txt', function (err) {
			if (err)
			{
				console.log('File5 - remove file error: ' + err);
			}
			console.log('File5 - remove file text1.txt');
		});

		fs5.rmdir(__dirname + '/mkdir', function (err) {
			if (err)
			{
				console.log('File5 - remove dir error: ' + err);
			}
			fs5.readdir(__dirname, function (err, files) {
				if (err)
				{
					console.log('File5 - read dir err: ' + err);
				}
				files.forEach(function (t) {
					console.log('File5 - after remove dir, files: ' + t);
				})
			})
		})
	});
	fs5.readdir(__dirname + '/mkdir', function (err, files) {
		if (err)
		{
			console.log('File5 - read dir error: ' + err);
		}
		files.forEach(function (file) {
			console.log('File5 - read dir file: ' + file);
		})
	});
});

