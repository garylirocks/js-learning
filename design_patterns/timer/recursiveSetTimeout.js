/**
 * NOTE use recursive setTimeout to do something, it's different to setInterval:
            setInterval: the next function call may be executed before the current one finishes
            recursive setTimeout: the next call is always executed after the current one

        recursive setTimeout can be used to do AJAX long-polling
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

    var myTimeout = setTimeout(function(){
        for (let i=0; i < chunkSize; i++) {
            current = source.next();
            if (!current.done) {
                process.stdout.write(current.value + ' ');
            } else {
                clearInterval(myTimeout);
                return;
            }
        }

        setTimeout(arguments.callee, interval);     // NOTE arguments.callee used to refer back to the current function
        process.stdout.write("\n" + "---" + "\n");
    }, interval);
}

chunkOutput(numberMaker(50), 10, 500);
