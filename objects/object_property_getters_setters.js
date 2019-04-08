/*
 * demo for object property getters and setters
 */

'use strict';

var person = {
  name: { firstName: 'Gary', lastName: 'Li' },
  age: 20
};

// NOTE define a new property on an object, with getter and setter functions
Object.defineProperty(person, 'fullName', {
  get: function() {
    return this.name.firstName + ' ' + this.name.lastName;
  },

  set: function(value) {
    var parts = value.split(' ');
    this.name.firstName = parts[0];
    this.name.lastName = parts[1];
  }
});

console.log(person.fullName); // NOTE you can access 'fullName' now

person.fullName = 'Hello Kitty'; // NOTE update the value of fullName, which actually changes firstName and lastName
console.log(person.name);

// NOTE can't define a getter function for an existing property, this has no effect
Object.defineProperty(person, 'age', {
  get age() {
    return 100;
  }
});

/** ================  you can also add accessor properties like this ================ */
let o = {
  get name() {
    return 'gary';
  },

  set name(newName) {
    this._name = newName;
  }
};

Object.getOwnPropertyDescriptors(o); // accessor property doesn't have a writable attribute
/*
{ name:
   { get: [Function: get name],
     set: [Function: set name],
     enumerable: true,
     configurable: true } }
*/
