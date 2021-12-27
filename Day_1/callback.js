const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Alarm', () => {
    console.log('Good Morning!!!');
    setTimeout(() => {
        console.log('Please Wake up,You will get late for gym');
    }, 5000);
});

console.log("Person is sleeping")

myEmitter.emit('Alarm');

setTimeout(() => {
    console.log("Person is still sleeping")
}, 3000);