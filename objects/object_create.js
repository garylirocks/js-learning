/**
 * demo for Object.create()
 */

'use strict';

// NOTE an object constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p = new Person('Gary', 20);
console.log(p);

// NOTE create a same object using Object.create, other methods for creating objects are actually shortcuts of this method
var p2 = Object.create(Object.prototype,
    {
        // NOTE property attributes 'enumerable', 'writable', 'configurable' are hidden from other methods
        name: {
            value: 'Gary',
            enumerable: true,
            writable: true,
            configurable: true,
        },
        age: {
            value: 20,
            enumerable: true,
            writable: true,
            configurable: true,
        }
    }
);
console.log(p2);
