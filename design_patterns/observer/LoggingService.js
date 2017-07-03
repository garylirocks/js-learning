var LoggingService = function () {
    var update = function(task) {
        var date = new Date();
        console.log(date + ': ' + task.name + ' is saving');
    };

    return {
        update: update
    };
}();

module.exports = LoggingService;
