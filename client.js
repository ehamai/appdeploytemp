var io2 = require('socket.io-client');
var socket2 = io2.connect('http://localhost:3000');

var msg2 = "bar";
socket2.emit('foo', msg2);