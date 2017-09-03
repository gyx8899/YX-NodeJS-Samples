// Demo exec
const child_process1 = require('child_process');

for (var i = 0; i < 3; i++)
{
	var workerProcess = child_process1.exec('node 17-process-support ' + i,
			function (err, stdout, stderr){
			if (err)
			{
				console.log('exec: error stack - ' + err.stack);
				console.log('exec: error code - ' + err.code);
				console.log('exec: Signal received - ' + err.signal);
			}
			stdout && console.log('exec: stdout - ' + stdout);
			stderr && console.log('exec: stderr - ' + stderr);
		});
	workerProcess.on('exit', function (code) {
		console.log('exec: child_process exit - code: ' + code);
	})
}

// Demo spawn
const child_process2 = require('child_process');
for (var j = 0; j < 3; j++)
{
	var workerProcess = child_process2.spawn('node', ['17-process-support', j]);

	workerProcess.stdout.on('data', function (data) {
		console.log('spawn - Stdout: ' + data);
	});

	workerProcess.stderr.on('data', function (data) {
		console.log('spawn - Stderr: ' + data);
	});

	workerProcess.on('close', function (code) {
		console.log('spawn - Process exit, code: ' + code);
	});
}

// Demo fork
const child_process3 = require('child_process');

for(var k = 0; k < 3; k++)
{
	var workerProcess = child_process3.fork('17-process-support');
	workerProcess.on('close', function (code) {
		console.log('fork - Process exit, code: ' + code);
	});
}