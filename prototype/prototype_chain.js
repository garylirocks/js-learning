/*
 * demo of how to create a prototype chain
 */

'use strict'

function Animal(voice) {
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function() {
    console.log(this.voice);
}

function Cat(name, color) {
    Animal.call(this, 'Meow');  // NOTE call parent prototype's constructor function, which is 'Animal'
    this.name = name;
    this.color = color;
}

// NOTE make Cat to inherit from Animal: Cat.prototype.__proto__ === Animal.prototype
Cat.prototype = Object.create(Animal.prototype);
// NOTE reassign Cat function as the constructor
Cat.prototype.constructor = Cat;

var snowball = new Cat('Snowball', 'White');

console.log(snowball);
/*
Cat { voice: 'Meow', name: 'Snowball', color: 'White' }
*/

console.log(snowball.__proto__);
/*
Cat { constructor: [Function: Cat] }
*/

console.log(snowball.__proto__.__proto__);
/*
Animal { speak: [Function] }
*/
