/*
 * demo of how to create inheritance with 'Class' syntax
 *  this is new syntax in ES6
 */

'use strict'

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }

    speak() {
        console.log(this.voice);
    }
}

class Cat extends Animal { // NOTE use 'extends' to extend a class
    constructor(name, color) {
        super('Meow');      // NOTE use 'super'
        this.name = name;
        this.color = color;
    }
}

var snowball = new Cat('Snowball', 'white');

console.log(snowball);
/*
Cat { voice: 'Meow', name: 'Snowball', color: 'white' }
*/

console.log(snowball.__proto__);
/*
Cat {}
*/

// NOTE all the properties are un-enumerable by default,
//      so they are not ouputted here, this is the difference contrasting to the function constructor method 
console.log(snowball.__proto__.__proto__);
/*
Animal {}
*/

// NOTE the property is here, but not enumerable
var propertyDesc = Object.getOwnPropertyDescriptor(snowball.__proto__.__proto__, 'speak');
console.log(propertyDesc);
/*
{ value: [Function: speak],
  writable: true,
  enumerable: false,
  configurable: true }
*/
