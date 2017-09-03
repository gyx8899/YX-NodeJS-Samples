// Demo1 readStream
var fs1 = require('fs');
var readerStream = fs1.createReadStream('in/input1.txt');
var readData = '';

readerStream.setEncoding('utf8');

readerStream.on('data', function (trunk){
	readData += trunk;
});

readerStream.on('error', function (err) {
	console.log("Stream1 - " + "Error in read file. " + err.stack);
});

readerStream.on('end', function () {
	console.log('Stream1 - ' + "Content: " + readData);
});
console.log('Stream1 - Read file complete!');

// Demo2 writeStream
var fs2 = require('fs');
var dataWrite = 'You are so cool!';
var writeStream = fs2.createWriteStream('./out/output4.txt');

writeStream.write(dataWrite, 'UTF8');
writeStream.end();

writeStream.on('finish', function () {
	console.log('Stream2 - write complete!');
});

writeStream.on('error', function (err) {
	console.log('Stream2 - ' + 'Write Stream error. ' + err.stack);
});

console.log('Stream2 - Write file end!');

// Demo3 pipe
var fs3 = require('fs');

var readStream3 = fs3.createReadStream('in/input1.txt');
var writeStream3 = fs3.createWriteStream('out/output2.txt');

readStream3.pipe(writeStream3);

console.log('Stream3 - pipe done');

// Demo4 compress
var fs4 = require('fs');
var zlib = require('zlib');

fs4.createReadStream('in/input1.txt')
		.pipe(zlib.createGzip())
		.pipe(fs4.createWriteStream('out/input1.text.zip'));

console.log('Stream4 - compress ok!');

// Demo5 decompress
var fs5 = require('fs');
var zlib = require('zlib');

fs5.createReadStream('out/input1.text.zip')
		.pipe(zlib.createGunzip())
		.pipe(fs5.createWriteStream('out/output3.txt'));

console.log('Stream 5 - decompress ok!');