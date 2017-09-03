// Demo1
var buf1 = new Buffer(10);
console.log('Buffer1 - ' + buf1.toString());

buf1 = new Buffer('Steper Kuo', 'utf-8');
console.log('Buffer1 - ' + buf1.toString());

buf1 = new Buffer([1,2,3,4,5]);
console.log('Buffer1 - ' + buf1.toString());

buf1 = new Buffer(256);
buf1.write('YX-NodeJS-Samples');
console.log('Buffer1 - ' + buf1.toString());


// Demo2
var buf2 = new Buffer(26);
for (var i = 0; i < 26; i++)
{
	buf2[i] = i + 97;
}

console.log('Buffer2 - ' + buf2.toString('ascii'));
console.log('Buffer2 - ' + buf2.toString('ascii', 0, 5));
console.log('Buffer2 - ' + buf2.toString('utf8', 0, 5));
console.log('Buffer2 - ' + buf2.toString(undefined, 0, 5));

// Demo3
var buf3 = new Buffer('YX-NodeJS-Samples');
var buf3JSON = buf3.toJSON();
console.log('Buffer3 - ' + buf3JSON);

// Demo4
var buf41 = new Buffer('Buffer41');
var buf42 = new Buffer('Buffer42');
var buf43 = Buffer.concat([buf41, buf42]);

console.log('Buffer4 - ' + buf43.toString());

// Demo5 compare
var buf51 = new Buffer('Buffer51');
var buf52 = new Buffer('Buffer52');
var compareResult = buf52.compare(buf51);

console.log('Buffer5 - ' + compareResult);

// Demo6 copy
var buf61 = new Buffer('ABCd');
var buf62 = new Buffer('OKBB');
buf61.copy(buf62);

console.log('Buffer6 - ' + buf61.toString());
console.log('Buffer6 - ' + buf62.toString());

// Demo7 slice
var buf71 = new Buffer('YX-NodeJS-Samples');
var buf72 = buf71.slice(0, 3);

console.log('Buffer7 - ' + buf71.toString());
console.log('Buffer7 - ' + buf72.toString());
console.log('Buffer7 - ' + buf72.length);