/**
 * Whether an object is extensible, sealed and frozen, and relationship between them.
 *
 *  Non-extensible:
 *    - if you can't add any new property to it;
 *    - use `Object.preventExtensions` to make it non-extensible;
 *    - use `Object.isExtensible` to check;
 *
 *  Sealed:
 *    - non-extensible AND all its properties are non-configurable (therefore not removable, can still be writable);
 *    - use `Object.seal` to make it sealed;
 *    - use `Object.isSealed` to check;
 *
 *  Frozen:
 *    - sealed AND all its data properties (not accessor properties with getter or setter components) are non-writable (actually accessor property doesn't have a writable attribute);
 *    - use `Object.freeze` to make it frozen;
 *    - use `Object.isFrozen` to check;
 *
 * So:
 *    - a sealed object must be non-extensible, a fronzen object must be sealed;
 *    - an emptry non-extensible object is sealed and frozen;
 */

'use strict';

let o = { name: 'gary' };

Object.isExtensible(o);
// true

o.age = 20; // can add new property
// { name: 'gary', age: 20 }

Object.preventExtensions(o); // prevent extension

Object.isExtensible(o);
// false

Object.isSealed(o); // o is not sealed yet
// false

// o.gender = 'M'; // !! throws a TypeError, o is not extensible now, can't add new property

Object.getOwnPropertyDescriptors(o); // all properties are still configurable
/*
{ name:
   { value: 'gary',
     writable: true,
     enumerable: true,
     configurable: true },
  age:
   { value: 20,
     writable: true,
     enumerable: true,
     configurable: true } }
*/

Object.seal(o); // seal an object - this will make all properties non-configurable
Object.getOwnPropertyDescriptors(o);
/*
{ name:
   { value: 'gary',
     writable: true,
     enumerable: true,
     configurable: false },
  age:
   { value: 20,
     writable: true,
     enumerable: true,
     configurable: false } }
*/

Object.isSealed(o); // sealed now
// true

Object.isFrozen(o); // not frozen yet - writable attributes are still true
// false

Object.freeze(o); // freeze an object - making writable attribute to be false
Object.getOwnPropertyDescriptors(o);
/*
{ name:
   { value: 'gary',
     writable: false,
     enumerable: true,
     configurable: false },
  age:
   { value: 20,
     writable: false,
     enumerable: true,
     configurable: false } }
*/

Object.isFrozen(o);
// true

/** ================== Nested Object ================== */
const nested = { name: { first: 'gary', last: 'li' } };

Object.freeze(nested);

Object.isFrozen(nested);
// true

Object.isFrozen(nested.name); // NOTE only the top level is frozen
// false

/** ================== Empty Object ================== */

let empty = Object.preventExtensions({});

Object.isSealed(empty);
// true
Object.isFrozen(empty);
// true
