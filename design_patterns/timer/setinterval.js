/**
 * NOTE
 *      setTimeout and setInterval are important functions in JS, and they are the backbone of the Timer pattern
            which is peculiar to JS
 */

// NOTE a generator is used here to generate numbers
function* numberMaker(max = 200) {
    var i = 0;
    while (i < max) {
        i += 1;
        yield i;
    }
}

// NOTE output source in chunkSize every interval miliseconds
var chunkOutput = function (source, chunkSize, interval) {
    var current = 0;

    var intervalOutput = setInterval(function(){
        for (let i=0; i < chunkSize; i++) {
            current = source.next();
            if (!current.done) {
                process.stdout.write(current.value + ' ');
            } else {
                clearInterval(intervalOutput);
                return;
            }
        }

        process.stdout.write("\n" + "---" + "\n");
    }, interval);
}

chunkOutput(numberMaker(50), 10, 500);
