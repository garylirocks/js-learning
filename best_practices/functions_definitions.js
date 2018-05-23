
console.log(typeof statementFoo);   // function
statementFoo();                     // NOTE this function runs fine here

expressionFoo();                    // NOTE throws an error, expressionFoo is still undefined here

function statementFoo() {
    console.log("an statement function");
}

var expressionFoo = function anotherName() {    // give the function a name, only for debugging, you can't call this name directly
    console.log("an expression function");
    
    throw new Error('an intentional error')
};

expressionFoo();                    // runs, throw an error, in the debug trace, show error at 'anotherName'
anotherName();                      // anotherNameForExpressionFoo is not defined
