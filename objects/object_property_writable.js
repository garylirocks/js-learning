/*
 * demo for object property attribute 'writable'
 * if the 'writable' attribute of a property is false, it is readonly, cannot be changed,
 *      if it points to an object, content of that object can be changed, but you can not point it to another object
 *
 * usage example of Object.getOwnPropertyDescriptor, Object.defineProperty, Object.freeze
 */

'use strict';

var person = {
    name: {firstName: 'Gary', lastName: 'Li'},
    age: 20
};

// NOTE get a property descriptor object which shows detail info of a property
var propertyDescriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(propertyDescriptor);
/*
{ value: { firstName: 'Gary', lastName: 'Li' },
  writable: true,
  enumerable: true,
  configurable: true }
*/

person.name = {firstName: 'Jon', lastName: 'Snow'};
console.log(person.name);
/*
{ firstName: 'Jon', lastName: 'Snow' }
*/

// NOTE change the 'writable' attribute to false, then this property is readonly now
Object.defineProperty(person, 'name', {'writable': false});

var propertyDescriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(propertyDescriptor);
/*
{ value: { firstName: 'Jon', lastName: 'Snow' },
  writable: false,
  enumerable: true,
  configurable: true }
*/

person.name.lastName = 'Stark'; // NOTE the object 'name' property points to is still mutable
console.log(person.name);
/*
{ firstName: 'Jon', lastName: 'Stark' }
*/

person.name = {firstName: 'Arya', lastName: 'Stark'};
/*
throws an error here, you cannot change what 'name' property
*/


// NOTE another method to make properties readonly is to use the Object.freeze method
Object.freeze(person);
person.age = 30; // throws an error
