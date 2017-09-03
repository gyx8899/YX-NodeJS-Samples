// Demo1
var util = require('util');

function Base()
{
	this.name = 'base';
	this.year = 2017;
	this.sayMoney = function () {
		console.log('Get your money!');
	}
}
Base.prototype.getMonth = function () {
	console.log('Month: ' + new Date().getMonth());
};

function Sub()
{
	this.name = 'bob';
}

util.inherits(Sub, Base);

var baseObj = new Base();
baseObj.sayMoney();
baseObj.getMonth();

var subObj = new Sub();
subObj.getMonth();
// subObj.sayMoney();

// Demo2
var util2 = require('util');
function Persion()
{
	this.name = 'job';
	this.age = 29;
	this.firends = ['a', ['b']];
	this.history = function (){
		console.log('HHHHHA!');
	}
}

var me = new Persion();

console.log(util2.inspect(me));
console.log(util2.inspect(me, true));

// Demo3
var util3 = require('util');
console.log('Util - isArray: ' + util3.isArray([]));
console.log('Util - isArray: ' + util3.isArray(new Array()));
console.log('Util - isArray: ' + util3.isArray({}));

// Demo4
var util4 = require('util');
console.log('Util - isRegExp: ' + util4.isRegExp(/dslfd/));
console.log('Util - isRegExp: ' + util4.isRegExp(new RegExp('hhha')));
console.log('Util - isRegExp: ' + util4.isRegExp({}));

// Demo5
var util5 = require('util');
console.log('Util - isDate: ' + util5.isDate(new Date()));
console.log('Util - isDate: ' + util5.isDate(Date()));
console.log('Util - isDate: ' + util5.isDate({}));

// Demo6
var util6 = require('util');
console.log('Util - isError: ' + util6.isError(new Error()));
console.log('Util - isError: ' + util6.isError(new TypeError()));
console.log('Util - isError: ' + util6.isError({name:'error', message: 'hahh'}));