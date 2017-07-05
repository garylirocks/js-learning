// NOTE a simple Promise object, you can bind callbacks to 'done', 'failed'

var Promise = function () {
    var data,
        done = [],          // NOTE callbacks for done
        fail = [],          // NOTE callbacks for fail
        status = 'progress';    // NOTE status

    this.done = function (fn) {
        done.push(fn);

        if (status === 'done') {
            fn(data);
        }

        return this;
    };

    this.failed = function (fn) {
        fail.push(fn);

        if (status === 'failed') {
            fn(data);
        }

        return this;
    };

    this.resolve = function (result) {
        if (status !== 'progress') {
            throw 'Promise has already completed with a status of ' + status + ' and cannot be resolved again.';
        }

        status = 'done';
        data = result;

        done.forEach(function(fn) {
            fn(data);
        });

        return this;
    };

    this.fail = function (reason) {
        if (status !== 'progress') {
            throw 'Promise has already completed with a status of ' + status + ' and cannot be resolved again.';
        }

        status = 'failed';
        data = reason;

        fail.forEach(function(fn) {
            fn(data);
        });

        return this;
    };
};

module.exports = Promise;
