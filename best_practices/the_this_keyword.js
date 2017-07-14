/**
 demo the common way to avoid the 'this' keyword trap
 **/

var Person = function (name) {
    var _this = this;   // NOTE this is a common way to avoid the 'this' keyword trap, replace all 'this' with '_this'

    _this.name = name;

    _this.greet = function () {
        console.log('Hello ' + _this.name);
    };

    _this.delayedGreeting = function() {
        // NOTE if you use 'this' here, 'Hello undefined' will be printed out
        //          '_this.greet' is used as a callback here, it got copied to another variable, when executing, the
        //          context is lost
        setTimeout(_this.greet, 1000);
    };
};

var gary = new Person('Gary');

gary.greet();
gary.delayedGreeting();
