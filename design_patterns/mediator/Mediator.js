var Mediator = (function() {
    var channels = {};

    var subscribe = function(channel, context, func) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }

        this.channels[channel].push({
            context: context,
            func: func
        });
    };

    var publish = function(channel) {
        if (!this.channels[channel]) {
            return false;
        }

        // NOTE this is a common trick used to cOnvert the 'arguments' Object to an array,
        //          another way is Array.from(arguments);
        // the following call converts it to an array and slice off the first element from it
        var args = Array.prototype.slice.call(arguments, 1);

        this.channels[channel].forEach(function(sub) {
            sub.func.apply(sub.context, args);
        });
    };

    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    };
}());

module.exports = Mediator;
