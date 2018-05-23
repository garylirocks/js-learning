// NOTE demo the 'strict mode' of JavaScript
//      'use strict' can only be applied to the whole script or individual functions

'use strict';

// the following are some demo codes that only throw errors in strict mode

/********************
 use an undefined variable
********************/
function foo() {
    'use strict';       // apply 'strict mode' to this function
    name = 'gary';      // because of the 'strict mode', this will trigger an error
    console.log(name);
}

//foo();


/********************
 delete an variable
********************/
var obj = {
    'name': 'Gary',
};

//delete obj;                  // NOTE this only throws an error in strict mode
delete obj.name;


/********************
 write to a read only property
********************/
Object.defineProperty(obj, 'readOnly', {
    'writable': false,
});

//obj.readOnly = 'a new string';  // NOTE this only throws an error in strict mode
console.log(obj.readOnly);


/********************
 octal number literals
********************/
// var x = 012;        // NOTE this will be treated as an Octal literal in non strict mode, throws an error in strict mode
var x = parseInt('012', 8); // NOTE use 'parseInt' in strict mode

var y = 0x20;   // NOTE hexdecimal literals can still by used

console.log(x);
console.log(y);


/********************
 'this' referring to the global object
********************/
function printName () {
    console.log(this.name);
}

printName();      // NOTE throws an error only in 'strict mode', in non-strict mode, 'this' will refer to the global object
