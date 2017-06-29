/*
 * demo for object property attribute 'configurable'
 * if a property is not configurable:
 *      you cannot change its 'enumerable' and 'configurable' attributes,
 *      you can still change the 'writable' attributes,
 *      you can't delete this property
 */

'use strict';

var person = {
    name: {firstName: 'Gary', lastName: 'Li'},
    age: 20
};

// NOTE make a property un-configurable
Object.defineProperty(person, 'age', {
    configurable: false
});

// NOTE can't change the enumerable attribute now
Object.defineProperty(person, 'age', {
    enumerable: false
});
/*
throws an error
*/

// NOTE can't change the configurable attribute now
Object.defineProperty(person, 'age', {
    configurable: true
});
/*
throws an error
*/

// NOTE still CAN change the writable attribute
Object.defineProperty(person, 'age', {
    writable: false
});
/*
works, no error
*/

// NOTE can't be deleted now
delete person.age;
/*
throws an error, can't be deleted
*/
