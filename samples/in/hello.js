//hello.js
function Hello(){
	var name;
	this.setName = function (myName) {
		name = myName;
	};
	this.sayHello = function () {
		console.log('Hello.js : hello ' + name);
	}
}
module.exports = Hello;