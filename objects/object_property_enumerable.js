/*
 * demo for object property attribute 'enumerable'
 *      if a property is not enumerable, it will not be outputed in for..in loop, Object.keys(), JSON.stringify()
 *
 * demo usage of Object.keys()
 */

'use strict';

var person = {
    name: {firstName: 'Gary', lastName: 'Li'},
    age: 20
};

// NOTE iterate thru the properties of an object and its prototype chain
for (let propertyName in person) {
    console.log(propertyName + ': ' + person[propertyName]);
}
/*
name: [object Object]
age: 20
*/

// NOTE another way to find all direct enumerable properties of an object, not ones in the prototype chain
console.log(Object.keys(person));
/*
[ 'name', 'age' ]
*/


// NOTE make a property not enumerable
Object.defineProperty(person, 'name', {
    'enumerable': false
});

for (let propertyName in person) {
    console.log(propertyName + ': ' + person[propertyName]);
}
// NOTE 'name' property is not outputed now
/*
age: 20
*/

console.log(Object.keys(person));
/*
[ 'age' ]
*/

// NOTE non-enumerable properties can't be serailized as well
console.log(JSON.stringify(person));
/*
{"age":20}
*/
