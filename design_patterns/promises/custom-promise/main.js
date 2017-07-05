var Promise = require('./promise');

var promise1 = new Promise();

setTimeout(function() {
    promise1.resolve();
}, 1000);

setTimeout(function() {
    promise1.done(function (data) {
        console.log('Handler added after deferred object is done');
    });
}, 2000);

promise1.done(function (data) {
    console.log('Deferred object has completed');
});

// another promise instance
var promise2 = new Promise();
promise2.failed(function() {
    console.log('Promise #2 failed');
}).done(function () {
    console.log('Promise #2 has completed');
});

setTimeout(function() {
    promise2.fail();
}, 1000);

console.log('application completed');
