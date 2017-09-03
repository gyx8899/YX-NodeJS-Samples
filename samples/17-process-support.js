// support.js
var processPath = process.argv[1];
var processName = processPath.split('\\').pop();
console.log("child process: " + processName + ' ' + process.argv[2] + ' is runing');