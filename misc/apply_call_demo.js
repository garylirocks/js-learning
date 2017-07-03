// NOTE usage demo for 'call' and 'apply', they are basically the same, the only difference is whether you can pass in
//      all the parameters separately or all encapsulated in an array

var intro = function (name, age) {
    console.log(`Hello, my name is ${name}, I am ${age}`);
}

intro('Gary', 21);

// NOTE with 'call', all parameters are passed separately
intro.call(undefined, 'Gary', 21);

// NOTE with 'apply', the second parameter should be an array
intro.apply(undefined, ['Gary', 21]);

// NOTE in ES6, you can also use 'call' and the spread operator together
intro.call(undefined, ...['Gary', 21]);
