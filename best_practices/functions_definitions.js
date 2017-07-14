
console.log(typeof statementFoo);   // function
statementFoo();    // NOTE this function runs fine here

console.log(typeof expressionFoo);  // undefined
expressionFoo();   // NOTE throws an error, expressionFoo is still undefined here

function statementFoo() {
    console.log("an statement function");
}

var expressionFoo = function() {
    console.log("an expression function");
};
