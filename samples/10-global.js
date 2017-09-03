// Demo1
console.time('Global');

console.log('Global - ' + __filename);

console.log('Global - ' + __dirname);
console.info('Global - ' + __dirname);
console.error('Global - ' + __dirname);
console.warn('Global - ' + __dirname);
// console.trace();
// console.assert(false, 'OK');

console.timeEnd('Global');

// Demo2 process
process.on('exit', function (code) {

	setTimeout(function () {
		console.log('would not execute');
	}, 0);

	console.log('Process - exit: ' + code);
});

console.log('Process - execute over');

// Demo3 process props
process.stdout.write('Process - stdout OK\n');

process.argv.forEach(function (value, index, array) {
	console.log('Process - index: ' + index + ' value: ' + value + ' array: ' + array + '\n');
});

console.log('Process - execPath:' + process.execPath);

console.log('Process - platform:' + process.platform);

console.log('Process - dir:' + process.cwd);

console.log('Process - version:' + process.version);

console.log('Process - memory usage:' + JSON.stringify(process.memoryUsage()));