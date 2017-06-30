/*
 * a demo of extending Array (by adding a custom function) thru prototype
 *  shows the basic idea and usage of prototype
 */

'use strict';

// NOTE add functionality to Array by add something to its prototype
Array.prototype.last = function() {
    return this[this.length - 1];
}

// NOTE this syntax is actually a shortcut for new Array('elem1', 'elem2', ...);
var arr = ['one', 'two', 'three'];
console.log(arr.last());
/*
three
*/

var arr2 = new Array('one', 'two', 'three');
console.log(arr2.last());
/*
three
*/
