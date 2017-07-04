// NOTE define a module using the 'define' function:
//          first argument is an array of dependencies, which is empty here;
//          second argument is a function that returns a module
define([], function(){
    var get = function(from, to) {
        var number = Math.floor(Math.random() * (to + 1 - from) + from);
        return number;
    };

    return {
        get: get
    };
});
