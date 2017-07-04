define(['RandomNumber'], function(rn){
    var run = function(from, to) {
        var number = rn.get(from, to);

        var guess = parseInt(prompt('I get a number from ' + from + ' to ' + to + ', could you guess what it is ?'));

        if (guess === number) {
            alert('Wow! You are right, it is ' + number);
        } else {
            alert('Sorry, the number is ' + number + ', but your guess is ' + guess);
        }
    }

    return {
        run: run
    };
});
