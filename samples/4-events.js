// Demo1
var events1 = require('events');

var eventEmitter1 = new events1.EventEmitter();

var connectEventName = 'connection';
var dataReceiveEventName = 'data-receive';

var connectionHandler = function ()
{
	console.log('Event1 - connected!');
	eventEmitter1.emit(dataReceiveEventName);
};

eventEmitter1.on(connectEventName, connectionHandler);
eventEmitter1.on(dataReceiveEventName, function () {
	console.log('Event1 - data received!');
});

eventEmitter1.emit(connectEventName);

console.log('End!');

// Demo2
var EventEmitter2 = require('events').EventEmitter;
var emitter = new EventEmitter2();
emitter.on('test-event', function () {
	console.log('Event2 - test-event: triggered!');
});
setTimeout(function () {
	console.log('Event2 - emit test-event!');
	emitter.emit('test-event');
}, 1000);

// Demo3
var event3 = require('events');
var emit3 = new event3.EventEmitter();
emit3.on('someEvent', function (para1, para2) {
	console.log('Event3 - listener1: ' + para1 + '  ' + para2);
});
emit3.on('someEvent', function (para1, para2) {
	console.log('Event3 - listener2: ' + para1 + '  ' + para2);
});
emit3.emit('someEvent', '鬼吹灯', '之黄皮子坡');

// Demo4
var events4 = require('events');
var eventEmitter4 = new events4.EventEmitter();

var listener41 = function () {
	console.log("Event4 - Listener41 triggered!");
};

var listener42 = function () {
	console.log("Event4 - Listener42 triggered!");
};

var eventName4 = 'event-4';

eventEmitter4.addListener(eventName4, listener41);

eventEmitter4.on(eventName4, listener42);

console.log('Event4: listener counter - ', require('events').EventEmitter.listenerCount(eventEmitter4, eventName4));

eventEmitter4.emit(eventName4);

eventEmitter4.removeListener(eventName4, listener41);
console.log('Event4: listener41 would not listen!');

console.log('Event4: listener counter - ', require('events').EventEmitter.listenerCount(eventEmitter4, eventName4));

eventEmitter4.emit(eventName4);

console.log('Event4: debug over!');